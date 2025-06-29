import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageReducer';

const store = configureStore({
    reducer: {
        page: pageReducer,
    },
    // devTools: DEBUG,
});

export default store;