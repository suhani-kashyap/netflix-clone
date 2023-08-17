import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
})

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from the state.
// The state here is the global redux store. 
// Inside the redux store we are accessing the user slice
// Inside the user slice we are accessing the user "value"
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;