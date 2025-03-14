import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/couterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
