import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const appReducer = combineReducers({
  userReducer: userReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
