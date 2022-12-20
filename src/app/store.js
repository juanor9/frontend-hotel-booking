import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../features/hotels/hotelsSlice';
import userReducer from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    users: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
