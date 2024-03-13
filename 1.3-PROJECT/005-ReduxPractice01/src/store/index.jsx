import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoItem"; // Correct import name

const store = configureStore({
  reducer: {
    todo: todoReducer, // Use todoReducer as the reducer for the "todo" slice
  },
});

export default store;
