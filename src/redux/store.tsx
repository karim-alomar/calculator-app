import { configureStore } from "@reduxjs/toolkit";
import { calcolaterReducer } from "./reducers/calcolaterReducers";
import { modeReducer } from "./reducers/modeReducer";

export const store = configureStore({
  reducer: {
    calc: calcolaterReducer,
    mode: modeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
