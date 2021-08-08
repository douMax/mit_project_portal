import axios from "axios";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUserSuccess = (payload) => ({
    type: LOGIN_USER_SUCCESS,
    payload
});

export const loginUserFailure = (payload) => ({
    type: LOGIN_USER_FAILURE,
    payload
});

export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const loginUser = ({ username, password, role }) => (dispatch) => {
    return axios({
        method: "POST",
        url: "http://localhost:5000/auth/login",
        headers: {
            'Content-Type': "application/json"
        },
        data: {
            username,
            password,
            role
        }
    })
        .then((resp) => {
            console.log("data", resp.data.data);
            dispatch(loginUserSuccess(resp.data.data.user));
        })
        .catch((err) => {
            console.log(err);
            dispatch(loginUserFailure(err))
        })
};
