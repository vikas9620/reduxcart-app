import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { uiActions } from './components/store/UiReducer';

function App() {
  const dispatch = useDispatch();
  const isActive = useSelector(state => state.cart.cartActive);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendRequest = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );

      try {
        const response = await fetch(
          'https://ecom-app-74ad3-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }

        dispatch(
          uiActions.setNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      } catch (error) {
        dispatch(
          uiActions.setNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
    };

    sendRequest().catch((error) => {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {!isActive && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
