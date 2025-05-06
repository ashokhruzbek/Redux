// import { createStore } from "redux";
// import { studentReducer } from "./studentReducer";
// export const store = createStore(studentReducer)

import { createStore } from "redux";
import { counterReducer } from "./counterReducer";


export const store = createStore(counterReducer)