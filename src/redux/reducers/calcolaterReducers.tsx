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
  },
});

export const { updateCalc, resetValue, handelEval } = calcolaterSlice.actions;

export const calcolaterReducer = calcolaterSlice.reducer;
