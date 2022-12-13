import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  value: number;
  lastValue: number;
}
const initialState: CounterState = {
  value: 0,
  lastValue: 0,
};
export const calcolaterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    resetValue: (state) => {
      state.value = 0;
      state.lastValue = 0;
    },
    getLastValue: (state, action: PayloadAction<number>) => {
      state.lastValue = action.payload;
    },
    deleteValue: (state) => {
      if (state.value <= state.lastValue) {
        state.value = 0;
      } else {
        state.value -= state.lastValue;
      }
    },
  },
});

export const { incrementByAmount, resetValue, getLastValue, deleteValue } =
  calcolaterSlice.actions;

export const calcolaterReducer = calcolaterSlice.reducer;
