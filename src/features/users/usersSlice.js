import { createSlice } from '@reduxjs/toolkit';
import createUser from '../../services/users';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
