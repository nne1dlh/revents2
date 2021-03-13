import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants"

const initState = {
    auth: true,
    curUser: {
        email: 'test@test.com',
        photoURL: '/assets/user.png'
    }
}

export default function authReducer(state = initState, { type, payload }) {
    switch (type) {
        case SIGN_IN_USER:
            return {
                ...state,
                auth: true,
                curUser: {
                    email: payload.email,
                    photoURL: '/assets/user.png'
                }
            };
        case SIGN_OUT_USER:
            return {
                ...state,
                auth: false,
                curUser: null
            };
        default:
            return state;
    }
}