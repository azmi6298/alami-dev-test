import { createSlice } from "@reduxjs/toolkit";

export const phoneNumberSlice = createSlice({
  name: "phoneNumber",
  initialState: {
    value: "021-12345678",
  },
  reducers: {
    updatePhoneNumber: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { updatePhoneNumber } = phoneNumberSlice.actions;

export const selectPhoneNumber = (state) => state.phoneNumber.value;

export default phoneNumberSlice.reducer;
