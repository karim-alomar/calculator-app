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
      state.result = state.value;
    },
    EquelValue: (state) => {
      state.value = eval(state.value).toString();
    },
    plusMinusValue: (state) => {
      if (state.value != "") {
        state.value = (parseFloat(state.value) * -1).toString();
        state.result = state.value;
      }
    },
  },
});

export const {
  updateCalc,
  resetValue,
  handelEval,
  removeValue,
  EquelValue,
  plusMinusValue,
} = calcolaterSlice.actions;

export const calcolaterReducer = calcolaterSlice.reducer;
