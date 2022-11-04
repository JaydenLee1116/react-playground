import { configureStore } from '@reduxjs/toolkit';
import user from './store/userSlice';
import cart from './store/itemSlice';

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
