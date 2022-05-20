import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./reducers/reducer";

export const store = configureStore({
  reducer: {
    game: gamesReducer,
  },
});
+window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
