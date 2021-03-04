const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export function increment(amt) {
    return {
        type: INCREMENT_COUNTER,
        payload: amt
    }
}

export function decrement(amt) {
    return {
        type: DECREMENT_COUNTER,
        payload: amt
    }
}

const initState = {
    data: 42
}

export default function testReducer(state = initState, action) {
    console.log('action', action);
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + action.payload
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                data: state.data - action.payload
            };
        default:
            return state;
    }
}