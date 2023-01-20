/* eslint-disable  */

import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

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

  await fetch(`${BASE_URL}/api/hotels/${id}`, options);
  return id;
});

export const updateHotel = createAsyncThunk('hotels/updateHotel', async (hotel) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hotel),
  };

  const response = await fetch(`${BASE_URL}/api/hotels/${hotel._id}`, options);
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
      const { hotels } = current(state)
      state.hotels = hotels.filter((h)=> h._id !== action.payload)
    });
    builder.addCase(updateHotel.fulfilled, (state, action) => {
      const { hotels } = current(state)
      const hotelsUpdated = hotels.map((h) => {
        if (h._id === action.payload._id) {
          return {...h, ...action.payload}
        }
        return h
      })
      state.hotels = hotelsUpdated;
    });
  },
});

export default hotelsSlice.reducer;
