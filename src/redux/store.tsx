import { configureStore } from "@reduxjs/toolkit";
import { calcolaterReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    calc: calcolaterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
