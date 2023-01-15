import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = createAsyncThunk(
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
export const validateUserMailToken = async (token) => {
  const response = await fetch(`${BASE_URL}/auth/local/activate/${token}`);
  const data = response.json();

  return data;
};

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async (email) => {
    // get user id
    const getIdOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(`${BASE_URL}/api/users/search?email=${email}`, getIdOptions);
    const result = await res.json();
    const { _id } = result;
    console.log(_id);
  },
);
