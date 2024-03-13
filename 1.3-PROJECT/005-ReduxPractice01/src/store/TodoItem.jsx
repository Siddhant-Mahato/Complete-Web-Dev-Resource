import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.splice(action.payload, 1);
    },
    
    deleteAllItem: (state, action) => {
      return [];
    },

  },
});

export const { addTodo, deleteItem,deleteAllItem } = todoSlice.actions;
export default todoSlice.reducer;
