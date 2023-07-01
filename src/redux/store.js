import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authFeature";
import productReducer from "./features/productFeature";
import filterReducer from "./features/filterFeature";
import cartReducer from "./features/cartFeature";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
