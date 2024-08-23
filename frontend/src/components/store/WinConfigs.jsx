import { createSlice } from "@reduxjs/toolkit";
const windowsInitState = [
    { material: null },
    { company: null },
    { openingSystem: null },
    { typeOfUnit: null },
    { profile: null },
    { frame: null },
    { sash: null },
    { layout: null },
    { fanLight:null },
    { openingLayout:null },
    { profileColor:null },
    { glass:null },
    { glassColor:null },
    { height: null, width: null, pieces: null },
];

const windowsSlice = createSlice({
    name: "selectedWinConfigs",
    initialState: windowsInitState,
    reducers: {
        addConfig(state, action) {
            const { option, index } = action.payload;
            const keyOfSelectedOption = Object.keys(state[index])[0];
            console.log(keyOfSelectedOption);
            state[index][keyOfSelectedOption] = option;
        },
        addRadioConfig(state, action) {
            console.log(action.payload);
            console.log("helooooo")
            const { configName, selectedOption } = action.payload;
            state[8][configName] = selectedOption;
        },
        addInputData(state, action) {
            const { keyName, val } = action.payload;
            state[9][keyName] = val;
        },
    },
});

const addWinConfig = windowsSlice.actions;
export default windowsSlice;
export { addWinConfig };
