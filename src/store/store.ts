import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { PersistConfig, Storage } from "redux-persist/es/types";

import rootReducer from "@src/store/reducers.root";

// Init Middlewares
// -- None for now

// Init Store
const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});
const persistor = persistStore(store);

// Run Middlewares
// -- None for now

// Persistor HMR
if (import.meta.hot) {
  import.meta.hot.accept("store/reducers.root", () => {
    const nextRootReducer = require("store/reducers.root");
    store.replaceReducer(nextRootReducer);
  });
}

// Exports
export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type PersistConfigSupplier<S> = (storage: Storage) => PersistConfig<S>;
