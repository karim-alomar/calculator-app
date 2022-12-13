import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  value: string;
  result: string;
}
const initialState: CounterState = {
  value: "",
  result: "",
};
export const calcolaterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateCalc: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    handelEval: (state, action: PayloadAction<string>) => {
      state.result = eval(state.value + action.payload);
    },
    resetValue: (state) => {
      state.value = "";
      state.result = "";
    },
    removeValue: (state) => {
      state.value = state.value.slice(0, -1);
    },
  },
});

export const { updateCalc, resetValue, handelEval, removeValue } =
  calcolaterSlice.actions;

export const calcolaterReducer = calcolaterSlice.reducer;
