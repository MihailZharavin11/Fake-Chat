import { createSelector, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import morpheus from "../../images/morpheus.png";
import robot from "../../images/robot.png";
import gilfoyd from "../../images/gilfoyd.png";

const initialState = {
  users: [
    {
      id: uuidv4(),
      name: "Morpheus",
      avatar: morpheus,
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
      avatar: robot,
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
      avatar: gilfoyd,
      name: "Gilfoyd",
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
  filter: "",
  loading: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addMessage: (state, action) => {},
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const sel = createSelector(
  (state) => state.users.users,
  (state) => state.users.filter,
  (allUsers, filter) => {
    if (!filter) return allUsers;
    const users = allUsers.filter((element) =>
      element.name.toLowerCase().includes(filter.toLowerCase())
    );
    return users;
  }
);

const { reducer, actions } = usersSlice;

export default reducer;

export const { addMessage, addFilter } = actions;
