/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  hotels: [],
};

export const getHotels = createAsyncThunk('hotels/getHotels', async () => {
  const response = await fetch(`${BASE_URL}/api/hotels`);
  const data = await response.json();
  return data;
});

export const getHotelById = createAsyncThunk('hotels/getHotelById', async (id) => {
  const response = await fetch(`${BASE_URL}/api/hotels/${id}`);
  const data = await response.json();
  return data;
});

export const createHotel = createAsyncThunk('hotels/createHotel', async (hotel) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hotel),
  };

  const response = await fetch(`${BASE_URL}/api/hotels`, options);
  const data = await response.json();
  return data;
});

export const deleteHotel = createAsyncThunk('hotels/deleteHotel', async (id) => {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/api/hotels/${id}`, options);
  const data = await response.json();
  return data;
});

export const updateHotel = createAsyncThunk('hotels/updateHotel', async (hotel, id) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hotel),
  };

  const response = await fetch(`${BASE_URL}/api/hotels/${id}`, options);
  const data = await response.json();
  return data;
});

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getHotels.fulfilled, (state, action) => {
      state.hotels = action.payload;
    });
    builder.addCase(getHotelById.fulfilled, (state, action) => {
      state.hotels = action.payload;
    });
    builder.addCase(createHotel.fulfilled, (state, action) => {
      state.hotels = action.payload;
    });
    builder.addCase(deleteHotel.fulfilled, (state, action) => {
      state.hotels = action.payload;
    });
    builder.addCase(updateHotel, (state, action) => {
      state.hotels = action.payload;
    });
  },
});

export default hotelsSlice.reducer;
