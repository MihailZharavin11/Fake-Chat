import { createSelector, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import morpheus from "../../images/morpheus.png";
import robot from "../../images/robot.png";
import gilfoyd from "../../images/gilfoyd.png";

const initialState = {
  users: [
    {
      id: "a9271398-160b-48b6-b93e-d92167a7edc1",
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
      id: "a98b9925-b1c9-4565-a14e-881585fdc318",
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
      id: "5c384b2a-1331-4b82-b81f-5039f7af1808",
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

export const getUsers = createSelector(
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

export const getUser = createSelector(
  (state) => state.users.users,
  (state, id) => id,
  (users, id) => {
    return users.find((element) => element.id === id);
  }
);

const { reducer, actions } = usersSlice;

export default reducer;

export const { addMessage, addFilter } = actions;
