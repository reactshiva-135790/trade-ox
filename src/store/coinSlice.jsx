import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coin: "FUFI",
    inputValue: {
        swapFusd: "",
        swapCoin: "",
        isReverse: true,
        isLoading: false,
        toggleMenu: false
    },
};

export const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {
        setCoin: (state, action) => {
            state.coin = action.payload;
        },
        setInputValue: (state, action) => {
            const { swapCoin, swapFusd } = action.payload;
            state.inputValue.swapCoin = swapCoin;
            state.inputValue.swapFusd = swapFusd;
        },
        setIsReverse: (state, action) => {
            state.isReverse = !state.isReverse;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setToggleMenu: (state, action) => {
            state.toggleMenu = action.payload;
        },
    },
});

export const { setCoin, setInputValue, setIsReverse, setIsLoading, setToggleMenu } = coinSlice.actions;

export default coinSlice.reducer;
