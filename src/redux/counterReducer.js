const boshlangichQiymat = 0;

export const counterReducer = (state = boshlangichQiymat, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "RESET") {
    return 0;
  } else {
    return state;
  }
};