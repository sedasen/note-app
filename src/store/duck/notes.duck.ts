import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isIndexAccessible } from "@src/util/accessor.util";
import { PersistConfigSupplier } from "../store";

interface State {
  documents: NoteApp.Document[];
}

/* ------------------- */

const name = "notes";

const initialState: State = {
  documents: [],
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
    createDocument: (state, action: PayloadAction<NoteApp.Document>) => {
      state.documents.push(action.payload);
    },
    removeDocument: (state, action: PayloadAction<number>) => {
      state.documents.splice(action.payload, 1);
    },
    addDocumentLine: (state, action: PayloadAction<[number, string]>) => {
      const [documentIndex, line] = action.payload;
      if (isIndexAccessible(state.documents, documentIndex)) {
        const noteDocument = state.documents[documentIndex];
        noteDocument.noteLines.push(line);
      }
    },
    removeDocumentLine: (state, action: PayloadAction<[number, number]>) => {
      const [documentIndex, lineIndex] = action.payload;
      if (isIndexAccessible(state.documents, documentIndex)) {
        const noteDocument = state.documents[documentIndex];
        if (isIndexAccessible(noteDocument.noteLines, lineIndex)) {
          noteDocument.noteLines.splice(lineIndex, 1);
        }
      }
    },
    editDocumentLine: (
      state,
      action: PayloadAction<[number, number, string]>
    ) => {
      const [documentIndex, lineIndex, line] = action.payload;
      if (isIndexAccessible(state.documents, documentIndex)) {
        const noteDocument = state.documents[documentIndex];
        if (isIndexAccessible(noteDocument.noteLines, lineIndex)) {
          noteDocument.noteLines[lineIndex] = line;
        }
      }
    },
  },
});

/* ------------------- */

export { name, initialState };
export { persistConfig };
export const { actions, reducer } = slice;
export default slice;
