import { createSlice } from "@reduxjs/toolkit";
import { PersistConfigSupplier } from "../store";

interface State {
  type: NoteApp.Theme;
}

/* ------------------- */

const name = "theme";

const initialState: State = {
  type: "dark",
};

const persistConfig: PersistConfigSupplier = (storage) => ({
  storage,
  key: name,
  blacklist: [],
});

const slice = createSlice({
  name,
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.type = state.type === "dark" ? "light" : "dark";
    },
  },
});

/* ------------------- */

export { name, initialState };
export { persistConfig };
export const { actions, reducer } = slice;
export default slice;
