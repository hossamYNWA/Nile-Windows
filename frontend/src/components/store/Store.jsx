import windowsSlice from "./WinConfigs";
import winOptionsSlice from "./WinConfigOptions";
import cartSlice from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        selectedWinConfigs: windowsSlice.reducer,
        winConfigOptions: winOptionsSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default store;
