import { GET_USER_EOI, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, SIGNUP_USER_FAILURE, SIGNUP_USER_SUCCESS, GET_APPROVED_PROJECTS, GET_CLIENT_PROJECTS, GET_ALL_USERS } from "./authRedux/actions"


const initialState = {
    is_error: false,
    is_auth: false,
    is_registration: false,
    isloading: true,
    auth_user: [],
    user: null,
    projects: [],
    eoi: [],
    approved_projects: [],
    all_users: []
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
        case GET_CLIENT_PROJECTS:
            return {
                ...state,
                projects: payload
            }
        case GET_USER_EOI:
            return {
                ...state,
                eoi: payload
            }
        case GET_APPROVED_PROJECTS:
            return {
                ...state,
                approved_projects: payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                all_users: payload
            }
        default:
            return state;
    }
}

export default reducer;