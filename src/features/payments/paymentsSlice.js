import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payments: [],
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBooking } = paymentsSlice.actions;
export default paymentsSlice.reducer;
