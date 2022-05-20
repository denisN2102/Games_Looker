import { createStore, combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  cusomers: customerReducer,
});

export const store = createStore(rootReducer);
