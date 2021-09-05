import axios from "axios";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE";


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
});

export const signupUserSuccess = (payload) => ({
    type: SIGNUP_USER_SUCCESS,
    payload
});

export const signupUserFailure = (payload) => ({
    type: SIGNUP_USER_FAILURE,
    payload
});

export const getUserData = (username, role) => (dispatch) => {
    console.log(username, role, "api")
    return axios({
        method: 'POST',
        url: `http://localhost:5000/api/auth/${role}`,
        headers: {
            'Content-Type': "application/json"
        },
        data: { username: username }
    })
        .then((resp) => {
            // console.log(resp.data.user, "getUserData")
            dispatch(signupUserSuccess(resp.data));
        })
        .catch((err) => {
            console.log("student not found in the list")
        })
}

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
        .then(async (resp) => {
            // console.log("data", resp.data.data);
            await dispatch(getUserData(username, role));
            await dispatch(loginUserSuccess(resp.data.data.user));
        })
        .catch((err) => {
            console.log(err);
            dispatch(loginUserFailure(err))
        })
};

export const updateUser = (payload, id) => (dispatch) => {
    console.log(payload, id, "update-user-actions")
    return axios({
        method: "PUT",
        url: `http://localhost:5000/auth/update/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => {
            console.log(err);
        })
};

export const updatePassword = (payload, id) => (dispatch) => {
    console.log(payload, id, "update-user-actions")
    return axios({
        method: "PUT",
        url: `http://localhost:5000/auth/update-password/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => {
            console.log(err);
        })
};


export const signupUser = (payload, role) => (dispatch) => {
    console.log(payload, role, "signup-user-actions")
    return axios({
        method: "POST",
        url: `http://localhost:5000/api/auth/${role}/signup`,
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            console.log("signup", resp);
            dispatch(signupUserSuccess(resp.data));
        })
        .catch((err) => {
            console.log(err);
            dispatch(signupUserFailure(err));
        })
};

export const registerUser = (payload) => (dispatch) => {
    console.log(payload, 'called')
    return axios({
        method: "POST",
        url: "http://localhost:5000/auth/register",
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const updateStudentData = (payload, id, username) => (dispatch) => {
    console.log(payload, username, id)
    return axios({
        method: "PUT",
        url: `http://localhost:5000/api/students/${id}`,
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            if (resp.status) {
                dispatch(getUserData(username, "student"));
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

export const createEOI = (payload) => (dispatch) => {
    return axios({
        method: "POST",
        url: "http://localhost:5000/api/eoi",
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => {
            console.log(err);
        })
}

