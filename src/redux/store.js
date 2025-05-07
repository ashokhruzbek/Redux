// import { createStore } from "redux";
// import { studentReducer } from "./studentReducer";
// export const store = createStore(studentReducer)

import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { studentReducer } from "./studentReducer2";

const barchaReducerlar = combineReducers({
    counter: counterReducer,
    students: studentReducer
})
export const store = createStore(
    barchaReducerlar,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

