import { createSlice } from "@reduxjs/toolkit";

const myConnectionListSlice = createSlice({
    name: "myConnectionList",
    initialState: [],
    reducers: {
        setMyConnectionList: (state, action) => {
            return action.payload;
        },
        clearMyConnectionList: (state, action) => {
            return [];
        }
    }
})

export const { setMyConnectionList, clearMyConnectionList } = myConnectionListSlice.actions;
export default myConnectionListSlice.reducer;