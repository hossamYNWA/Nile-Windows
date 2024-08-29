import windowsSlice from "./WinConfigs";
import winOptionsSlice from "./WinConfigOptions";
import cartSlice from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loggedIn";

const store = configureStore({
    reducer: {
        selectedWinConfigs: windowsSlice.reducer,
        winConfigOptions: winOptionsSlice.reducer,
        cart: cartSlice.reducer,
        loggedIn: loginSlice.reducer,
    },
});

export default store;
