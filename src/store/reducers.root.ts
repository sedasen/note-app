import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";

// Ducks
import NotesDuck from "@src/store/duck/notes.duck";

// Slice Persistor Configs
import { persistConfig as NotesPersistConfig } from "@src/store/duck/notes.duck";

// Combine Reducers
const rootReducer = combineReducers({
  [NotesDuck.name]: persistReducer(
    NotesPersistConfig(storage),
    NotesDuck.reducer
  ),
});

// Persistor Config
const persistConfig: PersistConfig<any> = {
  storage,
  key: "root",
  whitelist: [NotesDuck.name],
};

export default persistReducer(persistConfig, rootReducer);
