import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let num = action.payload;
      state.find((item) => item.id === Number(num)).count++;
    },
    updateCart(state, action) {
      state.push(action.payload);
    },
    subtractCount(state, action) {
      let num = action.payload;
      let target = state.find((item) => item.id === Number(num));
      target.count--;
    },
    deleteCart(state, action) {
      let num = action.payload;
      return state.filter((item) => item.id !== num);
    },
  },
});
export default cart;
export let { addCount, updateCart, subtractCount, deleteCart } = cart.actions;
