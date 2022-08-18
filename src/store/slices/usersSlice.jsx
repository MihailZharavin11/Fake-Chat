import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import morpheus from "../../images/morpheus.png";
import robot from "../../images/robot.png";
import gilfoyd from "../../images/gilfoyd.png";
import api from "../../api";

const initialState = {
  users: [
    {
      id: "a9271398-160b-48b6-b93e-d92167a7edc1",
      name: "Morpheus",
      avatar: morpheus,
      touch: true,
      messages: [
        {
          to: "me",
          value: "Wake up, Neo...",
          date: new Date(),
        },
        {
          to: "interlocutor",
          value: "matrix everywhere",
          date: new Date(),
        },
      ],
    },
    {
      id: "a98b9925-b1c9-4565-a14e-881585fdc318",
      name: "Mr.Robot",
      avatar: robot,
      touch: true,
      messages: [
        {
          to: "me",
          value: "I am you",
          date: new Date(),
        },
        {
          to: "interlocutor",
          value: "People use force when they can't find words.",
          date: new Date(),
        },
      ],
    },
    {
      id: "5c384b2a-1331-4b82-b81f-5039f7af1808",
      avatar: gilfoyd,
      name: "Gilfoyd",
      touch: true,
      messages: [
        {
          to: "interlocutor",
          value:
            "I am a kamikaze of humiliation. Ready to fall to the bottom, just to drag you along. Your shame is my reward.",
          date: new Date(),
        },
        {
          to: "me",
          value: "Hallo, Gilfoyle",
          date: new Date(),
        },
      ],
    },
  ],
  filter: "",
  loading: "idle",
  error: null,
};

export const getMessage = createAsyncThunk(
  "users/getMessage",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const value = await api.getMessageFromChuck();
      const valueToAdd = {
        id,
        value: {
          to: "interlocutor",
          value,
          date: new Date(),
        },
      };
      dispatch(addMessage(valueToAdd));
      dispatch(changeTouch({ id }));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const handlePendingStatus = (state) => {
  state.loadingStatus = "loading";
};

const handleFulfilledStatus = (state) => {
  state.loadingStatus = "idle";
};

const handleRejectedStatus = (state, action) => {
  state.loadingStatus = "error";
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const findElement = state.users.find(
        (element) => element.id === action.payload.id
      );
      findElement.messages.push(action.payload.value);
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    changeTouch: (state, action) => {
      const findElement = state.users.find(
        (element) => element.id === action.payload.id
      );
      findElement.touch = !findElement.touch;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, handlePendingStatus)
      .addCase(getMessage.fulfilled, handleFulfilledStatus)
      .addCase(getMessage.rejected, (state, action) => {
        handleRejectedStatus(state, action);
      });
  },
});

const sortByDate = (array) => {
  const newArray = [...array];
  return newArray.sort((a, b) => {
    return (
      b.messages[b.messages.length - 1].date -
      a.messages[a.messages.length - 1].date
    );
  });
};

export const getUsers = createSelector(
  (state) => state.users.users,
  (state) => state.users.filter,
  (allUsers, filter) => {
    if (!filter) return sortByDate(allUsers);
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

export const { addMessage, addFilter, changeTouch } = actions;
