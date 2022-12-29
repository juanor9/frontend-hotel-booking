import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../features/hotels/hotelsSlice';
import userLoginReducer from '../features/auth/authSlice';
import userReducer from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    user: userLoginReducer,
    users: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
