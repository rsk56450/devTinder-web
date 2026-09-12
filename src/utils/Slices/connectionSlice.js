import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "connection",
    initialState: [],
    reducers: {
        setConnections: (state, action) => {
            return action.payload;
        },
        clearConnections: (state, action) => {
            return [];
        }
    }
})

export const { setConnections, clearConnections } = connectionSlice.actions;
export default connectionSlice.reducer;