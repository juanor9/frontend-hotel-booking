import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../features/hotels/hotelsSlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
