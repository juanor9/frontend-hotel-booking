/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

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

  await fetch(`${BASE_URL}/api/rooms/${id}`, options);
  return id;
});

export const updateRoom = createAsyncThunk('rooms/updateRoom', async (room) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(room),
  };

  const response = await fetch(`${BASE_URL}/api/rooms/${room._id}`, options);
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
      const { rooms } = current(state);
      state.rooms = rooms.filter((r) => r._id !== action.payload);
    });
    builder.addCase(updateRoom.fulfilled, (state, action) => {
      const { rooms } = current(state);
      const roomsUpdated = rooms.map((r) => {
        if (r._id === action.payload._id) {
          return { ...r, ...action.payload };
        }
        return r;
      });
      state.rooms = roomsUpdated;
    });
  },
});

export default roomsSlice.reducer;
