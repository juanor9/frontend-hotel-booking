/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {};

export const getBooking = createAsyncThunk('bookings/getBookings', async (id) => {
  const resp = await fetch(`${BASE_URL}/api/bookings/${id}`);
  const data = await resp.json();
  return data;
});

export const getBookings = createAsyncThunk('bookings/getBookings', async () => {
  const response = await fetch(`${BASE_URL}/api/bookings`);
  const data = await response.json();
  return data;
});

// eslint-disable-next-line consistent-return
export const createBooking = createAsyncThunk('bookings/createBooking', async (booking) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  };
  try {
    const response = await fetch(`${BASE_URL}/api/bookings`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async (id) => {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/api/bookings/${id}`, options);
  const data = await response.json();
  return data;
});

export const updateBooking = createAsyncThunk('bookings/updateBooking', async (booking, id) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  };

  const response = await fetch(`${BASE_URL}/api/bookings/${id}`, options);
  const data = await response.json();
  return data;
});

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    captureData: (state, action) => {
      state.bookings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookings.fulfilled, (state, action) => {
      state.bookings = action.payload;
    });
    builder.addCase(createBooking.fulfilled, (state, action) => {
      if (action.payload.name !== 'ValidationError') {
        state.bookings = action.payload;
      }
    });
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.bookings = action.payload;
    });
    builder.addCase(updateBooking, (state, action) => {
      state.bookings = action.payload;
    });
  },
});

export default bookingsSlice.reducer;
export const { captureData } = bookingsSlice.actions;
