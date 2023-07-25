import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

/*  what is reducers in redux 
 it is a kind of function that tells how the state should change 

*/
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
