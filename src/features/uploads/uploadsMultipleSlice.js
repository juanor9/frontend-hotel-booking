import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  uploadsMultiple: [],
};

export const createImages = createAsyncThunk('uploads/createImages', async (file) => {
  const formData = new FormData();
  const options = {
    method: 'POST',
    body: formData,
  };

  formData.append('file', file);
  formData.append('fileName', file.name);

  const response = await fetch(`${BASE_URL}/api/upload/files`, options);
  const data = await response.json();
  // eslint-disable-next-line no-console
  console.log('data images', data);
  const url = await data.url;
  return url;
});

const uploadsMultipleSlice = createSlice({
  name: 'uploadsMultiple',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createImages.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.uploadsMultiple = action.payload;
    });
  },
});

export default uploadsMultipleSlice.reducer;
