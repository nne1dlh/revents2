import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";
// return object to reducer that updates state within store

export function createEvent(evt) {
    return {
        type: CREATE_EVENT,
        payload: evt
    }
}

export function updateEvent(evt) {
    return {
        type: UPDATE_EVENT,
        payload: evt
    }
}

export function deleteEvent(evtId) {
    return {
        type: DELETE_EVENT,
        payload: evtId
    }
}