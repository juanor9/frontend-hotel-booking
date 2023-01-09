/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  rooms: [],
};

export const getRooms = createAsyncThunk('rooms/getRooms', async () => {
  const response = await fetch(`${BASE_URL}/api/rooms`);
  const data = await response.json();
  return data;
});

export const createRoom = createAsyncThunk('rooms/createRoom', async (room) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(room),
  };

  const response = await fetch(`${BASE_URL}/api/rooms`, options);
  const data = await response.json();
  return data;
});

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (id) => {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/api/rooms/${id}`, options);
  const data = await response.json();
  return data;
});

export const updateRoom = createAsyncThunk('rooms/updateRoom', async (room, id) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(room),
  };

  const response = await fetch(`${BASE_URL}/api/rooms/${id}`, options);
  const data = await response.json();
  return data;
});

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
    builder.addCase(createRoom.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
    builder.addCase(updateRoom.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
  },
});

export default roomsSlice.reducer;
