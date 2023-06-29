import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authFeature";
import productReducer from "./features/productFeature";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
