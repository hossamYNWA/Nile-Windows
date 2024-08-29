import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {logged:false},
    reducers: {
        switchLogin(state, action) {
            const logged = action.payload.logged;
            state.logged = logged;
        },
    },
});

const logActions = loginSlice.actions;
export default loginSlice;
export { logActions };
