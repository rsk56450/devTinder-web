import { createSlice } from "@reduxjs/toolkit";

const  feedSlice = createSlice({
    name: 'feed',
    initialState: [],
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        removeFeed: (state, action) => {
            console.log("action.payload -------  ", action.payload);
            console.log("state -------  ", state);
            const newFeed = state.filter((feed) => feed._id !== action.payload);
            console.log("newFeed -------  ", newFeed);
            return newFeed;
        },
    }
})

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;