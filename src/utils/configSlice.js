import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    changeLanguage: "en",
  },
  reducers: {
    changeLanguageAction: (state, action) => {
      state.changeLanguage = action.payload;
    },
    langDefaultAction: (state) => {
      state.changeLanguage = "en";
    },
  },
});

export const { changeLanguageAction, langDefaultAction } = configSlice.actions;

export default configSlice.reducer;
