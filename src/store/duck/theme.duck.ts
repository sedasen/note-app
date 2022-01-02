import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  type: "light" | "dark";
}

/* ------------------- */

const name = "theme";

const initialState: State = {
  type: "dark",
};

const persistConfig = (storage: any) => ({
  storage,
  key: name,
  blacklist: [],
});

const slice = createSlice({
  name,
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction) => {
      state.type = state.type === "dark" ? "light" : "dark";
      // TODO: @Yasin, set root color variables
    },
  },
});

/* ------------------- */

export { name, initialState };
export { persistConfig };
export const { actions, reducer } = slice;
export default slice;
