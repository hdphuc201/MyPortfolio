// import { TOGGLE_CART_MODAL, TOGGLE_SEARCH_MODAL } from './type';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openSearchModal: false,
    openCartModal: false,
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        toggleSearchModal: (state) => {
            state.openSearchModal = !state.openSearchModal;
        },
        toggleCartModal: (state) => {
            state.openCartModal = !state.openCartModal;
        },
    },
});

// Xuất các actions
export const { toggleSearchModal, toggleCartModal } = pageSlice.actions;

// Xuất reducer
export default pageSlice.reducer;
