import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ModeState {
  isDark: Boolean;
}
const initialState: ModeState = {
  isDark: true,
};
export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<Boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export const modeReducer = modeSlice.reducer;
