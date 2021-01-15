import { createSlice } from '@reduxjs/toolkit'

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    data: null,
  },
  reducers: {
    userProfileSetting: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { userProfileSetting } = userProfileSlice.actions;

export default userProfileSlice.reducer;