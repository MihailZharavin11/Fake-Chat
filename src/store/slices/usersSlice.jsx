import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  users: [],
  filter: "",
  loading: "idle",
  error: null,
};

export const getMessage = createAsyncThunk(
  "users/getMessage",
  async (id, { dispatch, rejectWithValue, getState }) => {
    try {
      const value = await api.getMessageFromChuck();

      setTimeout(() => {
        const valueToAdd = {
          id,
          value: {
            to: "interlocutor",
            value,
            date: new Date(),
          },
        };
        dispatch(addMessage(valueToAdd));
        dispatch(changeTouch({ id, newMessages: true }));
        localStorage.setItem("users", JSON.stringify(getState().users.users));
      }, 10000);
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
      findElement.newMessages = action.payload.newMessages;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
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
    debugger;
    return (
      new Date(b.messages[b.messages.length - 1].date) -
      new Date(a.messages[a.messages.length - 1].date)
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

export const { addMessage, addFilter, changeTouch, setUsers } = actions;
