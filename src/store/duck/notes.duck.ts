import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  documents: Document[];
}

interface Document {
  title: string;
  icon: string;
  color?: string;
  noteLines: string[];
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
    createDocument: (state, action: PayloadAction<Document>) => {
      state.documents.push(action.payload);
    },
  },
});

/* ------------------- */

export { name, initialState };
export { persistConfig };
export const { actions, reducer } = slice;
export default slice;
