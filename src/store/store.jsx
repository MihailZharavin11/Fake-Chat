import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
