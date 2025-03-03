import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 10,
    reducers: {
        increment: (state, actions) => {
            console.log(actions);
            return state + 1;
        },
        decrement: (state, actions) => {
            console.log(actions);
            return state - 1;
        },
        incByAmt: (state, actions) => {
            console.log(actions);
            return state + actions.payload;
        },
    },
});

export const { increment, decrement, incByAmt } = counterSlice.actions;
export default counterSlice.reducer;
