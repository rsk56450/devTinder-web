import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice.js";
import feedReducer from "./Slices/feedSlice.js";
import connectionReducer from "./Slices/connectionSlice.js";
import myConnectionListReducer from "./Slices/myConnectionList.js";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connection: connectionReducer,
        myConnectionList: myConnectionListReducer
    }
})

export default appStore;