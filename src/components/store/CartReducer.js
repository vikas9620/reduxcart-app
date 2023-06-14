import { createSlice } from "@reduxjs/toolkit";

const initialValue = { cartActive: false, cartItems: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    setCartActive(state) {
      state.cartActive = !state.cartActive;
    },
    addItemHandler(state,actions) {
        const newItem = actions.payload
        const existingItem = state.cartItems.find(item => item.id===newItem.id)
        state.totalQuantity++;
        if(!existingItem){
            state.cartItems.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalprice: newItem.price,
                name: newItem.title
            })
        }else{
            existingItem.quantity++;
            existingItem.totalprice += newItem.price}
  },
  removeCartItemHandler(state, action){
    const id = action.payload
    const existingItem = state.cartItems.find(item => item.id===id)
    state.totalQuantity--;
    if(existingItem.quantity===1){
state.cartItems = state.cartItems.filter(item=>item.id!==id)
    }else{
        existingItem.quantity--
        existingItem.totalprice -= existingItem.price
    }
  }

},
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
