import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  users: [
    {
      id: uuidv4(),
      name: "Morpheus",
      messages: [
        {
          to: "me",
          value: "Wake up, Neo...",
        },
        {
          to: "interlocutor",
          value: "matrix everywhere",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Mr.Robot",
      messages: [
        {
          to: "me",
          value: "I am you",
        },
        {
          to: "interlocutor",
          value: "People use force when they can't find words.",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "",
      messages: [
        {
          to: "interlocutor",
          value:
            "I am a kamikaze of humiliation. Ready to fall to the bottom, just to drag you along. Your shame is my reward.",
        },
        {
          to: "me",
          value: "Hallo, Gilfoyle",
        },
      ],
    },
  ],
  loading: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addMessage: (state, action) => {},
  },
});

const { reducer, actions } = usersSlice;

export default reducer;

export const { addMessage } = actions;
