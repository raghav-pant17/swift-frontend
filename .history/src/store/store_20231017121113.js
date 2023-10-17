import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import locReducer from "./locDataSlice";

const persistConfig = {
  key: "root",
  storage,
};

const store = configureStore({
  reducer: {
    location: locReducer,
  },
});

export default store;

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)
