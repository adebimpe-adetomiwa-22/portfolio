import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.open = !state.open;
        },
    },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
