import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  value: string;
  result: string;
  ops: string[];
}
const initialState: CounterState = {
  value: "",
  result: "",
  ops: ["/", "*", "+", "-", ".", "%", "="],
};
export const calcolaterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateCalc: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    handelEval: (state, action: PayloadAction<string>) => {
      if (!state.ops.includes(action.payload)) {
        state.result = eval(state.value + action.payload);
      }
    },
    resetValue: (state) => {
      state.value = "";
      state.result = "";
    },
    removeValue: (state) => {
      state.value = state.value.slice(0, -1);
    },
    EquelValue: (state) => {
      state.value = eval(state.value).toString();
    },
  },
});

export const { updateCalc, resetValue, handelEval, removeValue, EquelValue } =
  calcolaterSlice.actions;

export const calcolaterReducer = calcolaterSlice.reducer;
