import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  uploads: '',
};

const formData = new FormData();

export const createImage = createAsyncThunk('hotels/createImage', async (file) => {
  const options = {
    method: 'POST',
    body: formData,
  };

  formData.append('file', file);
  formData.append('fileName', file.name);

  const response = await fetch(`${BASE_URL}/api/upload/file`, options);
  const data = await response.json();
  const url = await data.url;
  // eslint-disable-next-line no-console
  return url;
});

const uploadsSlice = createSlice({
  name: 'uploads',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createImage.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.uploads = action.payload;
    });
  },
});

export default uploadsSlice.reducer;
