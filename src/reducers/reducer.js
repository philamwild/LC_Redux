const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case "INCREMENT":
            newState.counter += 1;
            return newState;
        case "DECREMENT":
            newState.counter -= 1;
            return newState;
        default:
            return newState;
    }
}

export default reducer;