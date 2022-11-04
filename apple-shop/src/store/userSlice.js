import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'lee', age: 31 },
  reducers: {
    changeName(state) {
      state.name = 'kim';
    },
    changeAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions;

export default user;
