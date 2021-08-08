import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER } from "./actions"


const initialState = {
    is_error: false,
    is_auth: false,
    auth_user: [],
    user: []
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
                is_auth: false
            };
        default:
            return state;
    }
}

export default reducer;