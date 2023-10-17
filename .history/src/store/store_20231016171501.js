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
