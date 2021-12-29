import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  documents: NoteApp.Document[];
}

/* ------------------- */

const name = "notes";

const initialState: State = {
  documents: [],
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
    createDocument: (state, action: PayloadAction<NoteApp.Document>) => {
      state.documents.push(action.payload);
    },
    // TODO: @Seda, add all other actions
  },
});

/* ------------------- */

export { name, initialState };
export { persistConfig };
export const { actions, reducer } = slice;
export default slice;
