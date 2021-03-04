import { sampleData } from "../../app/api/sampleData";
import { DELETE_EVENT, UPDATE_EVENT, CREATE_EVENT } from "./eventConstants";

const initState = {
    events: sampleData
}

export default function eventReducer(state = initState, { type, payload }) {
    switch (type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            };
        case UPDATE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(evt => evt.id !== payload.id), payload]
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(evt => evt.id !== payload)]
            };
        default:
            return state;
    }
}