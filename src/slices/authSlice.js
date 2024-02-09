import { createSlice } from '@reduxjs/toolkit';
import  secureLocalStorage  from  "react-secure-storage";//pour hash les données de notre local storage
//sotckage de nos données utilisateurs dans le cookie.
const initialState = {
  userInfo: secureLocalStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")): null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      secureLocalStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      secureLocalStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;