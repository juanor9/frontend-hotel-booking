import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../features/hotels/hotelsSlice';
import userLoginReducer from '../features/auth/authSlice';
import userReducer from '../features/users/usersSlice';
import bookingReducer from '../features/bookings/bookingsSlice';
import uploadsReducer from '../features/uploads/uploadsSlice';
import uploadsMultipleReducer from '../features/uploads/uploadsMultipleSlice';
import roomsReducer from '../features/rooms/roomsSlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    login: userLoginReducer,
    user: userReducer,
    rooms: roomsReducer,
    bookings: bookingReducer,
    upload: uploadsReducer,
    uploadsMultiple: uploadsMultipleReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
