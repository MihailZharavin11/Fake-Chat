import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../store/slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
