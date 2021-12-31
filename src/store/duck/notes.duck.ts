import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  documents: NoteDocument[];
}

export interface NoteDocument {
  title: string;
  iconColor: string;
  noteLines: string[];
}

/* ------------------- */

const name = "notes";

const initialState: State = {
  documents: []
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
    createDocument: (state, action: PayloadAction<NoteDocument>) => {
      state.documents.push(action.payload);
    }
  }
});

/* ------------------- */

export { name, initialState };
export { persistConfig };
export const { actions, reducer } = slice;
export default slice;
