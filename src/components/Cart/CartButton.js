import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../store/CartReducer';

const CartButton = (props) => {
const cartQuantity = useSelector(state => state.cart.totalQuantity)
  
const dispatch = useDispatch()
  const cartHandler = ()=>{
dispatch(cartAction.setCartActive());
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
