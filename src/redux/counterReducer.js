const initialState = () => {
    counter: 0
}

export const counterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter+1
        }
    } else if (action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter-1
        }
    } else if (action.type === "RESET") {
        return {
            ...state,
            counter: 0
        }
    } else {
        return state;
    }
}