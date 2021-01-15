import { createSlice } from '@reduxjs/toolkit';
import { get } from '../Services';

const users = createSlice({
  name: 'users',
  initialState: {
    data: null,
  },
  reducers: {
    getUser: (state) => {
      get().then(data => {
        state.data = data
      });
    },
  },
});

export const { getUser } = users.actions;

export default users.reducer;