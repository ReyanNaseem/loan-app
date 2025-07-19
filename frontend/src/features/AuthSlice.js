// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  fullName: null,
  imageUrl: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      const { email, fullName, imageUrl } = action.payload
      state.email = email
      state.fullName = fullName
      state.imageUrl = imageUrl
    }
  },
})

export const { setLoginData } = authSlice.actions
export default authSlice.reducer
