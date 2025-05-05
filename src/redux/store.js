import { createStore } from "redux";
import { studentReducer } from "./studentReducer";

export const store = createStore(studentReducer)