import { createSlice } from '@reduxjs/toolkit';
import login from '../../services/auth';

const initialState = {
  user: [],
};

const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload.profile;
    });
  },
});

export default loggedUserSlice.reducer;
