import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice.js";
import feedReducer from "./Slices/feedSlice.js";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer
    }
})

export default appStore;