import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colorMap, getColor } from "@src/util/colors.util";

interface State {
  type: "light" | "dark";
}

/* ------------------- */

const name = "theme";

const initialState: State = {
  type: "dark"
};

const persistConfig = (storage: any) => ({
  storage,
  key: name,
  blacklist: []
});

const slice = createSlice({
  name,
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction) => {
      state.type = state.type === "dark" ? "light" : "dark";

      const root = document.documentElement;

      colorMap.forEach((color, key) => {
        root.style.setProperty(`--${key}`, getColor(key, state.type));
      });
    }
  }
});

/* ------------------- */

export { name, initialState };
export { persistConfig };
export const { actions, reducer } = slice;
export default slice;
