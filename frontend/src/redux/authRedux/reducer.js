import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, SIGNUP_USER_FAILURE, SIGNUP_USER_SUCCESS } from "./actions"


const initialState = {
    is_error: false,
    is_auth: false,
    is_registration: false,
    auth_user: [],
    user: null
}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                is_auth: true,
                auth_user: payload
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                is_error: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                is_auth: false,
                user: null,
                is_error: false,
                auth_user: []
            };
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                is_registration: true,
                user: payload.user
            }
        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                is_registration: false,
                is_error: true
            }
        default:
            return state;
    }
}

export default reducer;