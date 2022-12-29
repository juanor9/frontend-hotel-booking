import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const login = createAsyncThunk(
  'auth/login',
  async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const res = await fetch(`${BASE_URL}/auth/local/login`, options);
    const result = await res.json();
    return result;
  },
);

export default login;

export async function validateUserMailToken(token) {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/local/activate/${token}`);
  const data = response.json();

  return data;
}
