/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
};

export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async () => {
  const response = await fetch('http://localhost:8080/api/hotels');
  const data = await response.json();
  return data;
});

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.hotels = action.payload;
    });
  },
});

export default hotelsSlice.reducer;
