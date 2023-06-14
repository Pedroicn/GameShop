import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers();

const store = configureStore({
  reducers: rootReducer,
});

export default store;
