import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../features/hotels/hotelsSlice';
import userLoginReducer from '../features/auth/authSlice';
import userReducer from '../features/users/usersSlice';
import uploadsSlice from '../features/uploads/uploadsSlice';
import roomsSlice from '../features/rooms/roomsSlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    login: userLoginReducer,
    user: userReducer,
    upload: uploadsSlice,
    rooms: roomsSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
