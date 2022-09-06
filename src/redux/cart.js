import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      console.log(payload);
      console.log(state.items);
      state.items = [...state.items, payload];
    },

    deleteItem: (state, { payload }) => (state = state.filter(({ id }) => id !== payload)),
  },
});

export const { addItem, deleteItem } = cart.actions;

export default cart.reducer;
