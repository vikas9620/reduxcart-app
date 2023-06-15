import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './CartReducer'
import uiSlice from './UiReducer'
const store = configureStore({
reducer: ({cart: cartSlice.reducer, ui: uiSlice.reducer })
})

export default store