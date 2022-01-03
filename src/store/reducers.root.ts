import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Ducks
import NotesDuck from "@src/store/duck/notes.duck";
import ThemeDuck from "@src/store/duck/theme.duck";

// Slice Persistor Configs
import { persistConfig as NotesPersistConfig } from "@src/store/duck/notes.duck";
import { persistConfig as ThemePersistConfig } from "@src/store/duck/theme.duck";

// Combine Reducers
const rootReducer = combineReducers({
  [NotesDuck.name]: persistReducer(
    NotesPersistConfig(storage),
    NotesDuck.reducer
  ),
  [ThemeDuck.name]: persistReducer(
    ThemePersistConfig(storage),
    ThemeDuck.reducer
  ),
});

// Persistor Config;
export default persistReducer({ storage, key: "root" }, rootReducer);
