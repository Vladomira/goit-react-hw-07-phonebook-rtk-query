import { configureStore } from "@reduxjs/toolkit";
// import middleware from "./contacts-middleware";
// import contactsReducer from "./contacts-reducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactsApi } from "../contacts-rtk/contactsSlice";

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",

  // middleware,
});
setupListeners(store.dispatch);
export default store;
