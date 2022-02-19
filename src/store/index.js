import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { messageReducer } from "./messageReducer";

const rootReducer = combineReducers({
  messagesState: messageReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
