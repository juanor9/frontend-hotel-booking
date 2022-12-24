import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../features/hotels/hotelsSlice';
import userLoginReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    user: userLoginReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
