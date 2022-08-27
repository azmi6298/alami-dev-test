import { configureStore } from "@reduxjs/toolkit";
import phoneNumberReducer from "../features/phone-number/phoneNumberSlice";

export default configureStore({
  reducer: {
    phoneNumber: phoneNumberReducer,
  },
});
