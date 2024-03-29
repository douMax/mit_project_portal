import axios from "axios";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE";

export const GET_USER_EOI = "GET_USER_EOI";
export const GET_APPROVED_PROJECTS = "GET_APPROVED_PROJECTS";
export const GET_CLIENT_PROJECTS = "GET_CLIENT_PROJECTS";

export const GET_ALL_USERS = "GET_ALL_USERS";

export const getAllUsers = (payload) => ({
    type: GET_ALL_USERS,
    payload
});

export const getClientProjects = (payload) => ({
    type: GET_CLIENT_PROJECTS,
    payload
});

export const getApprovedProjects = (payload) => ({
    type: GET_APPROVED_PROJECTS,
    payload
});

export const getUserEOI = (payload) => ({
    type: GET_USER_EOI,
    payload
});

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

export const getAllUsersData = () => (dispatch) => {
    return axios({
        method: 'GET',
        url: 'http://localhost:5000/auth/allUsers',
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then((resp) => {
            dispatch(getAllUsers(resp.data.users));
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getUserData = (username, role) => (dispatch) => {
    return axios({
        method: 'POST',
        url: `http://localhost:5000/api/auth/${role}`,
        headers: {
            'Content-Type': "application/json"
        },
        data: { username: username }
    })
        .then((resp) => {
            // (resp.data.user, "getUserData")
            dispatch(signupUserSuccess(resp.data));
        })
        .catch((err) => {
            ("student not found in the list")
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
            if (role === "admin") {
                await dispatch(loginUserSuccess(resp.data.data.user));
            }
            else {
                await dispatch(getUserData(username, role));
                await dispatch(loginUserSuccess(resp.data.data.user));
            }
        })
        .catch((err) => {
            dispatch(loginUserFailure(err))
        })
};

export const updateUser = (payload, id) => (dispatch) => {
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
    return axios({
        method: "POST",
        url: `http://localhost:5000/api/auth/${role}/signup`,
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            dispatch(signupUserSuccess(resp.data));
        })
        .catch((err) => {
            dispatch(signupUserFailure(err));
        })
};

export const registerUser = (payload) => (dispatch) => {
    return axios({
        method: "POST",
        url: "http://localhost:5000/auth/register",
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            console.log("success");
        })
        .catch((err) => {
            console.log(err);
        })
}

export const updateStudentData = (payload, id, username, role) => (dispatch) => {
    return axios({
        method: "PUT",
        url: `http://localhost:5000/api/${role}s/${id}`,
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            if (resp.status) {
                dispatch(getUserData(username, role));
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
            console.log("success");
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getUserProjectsData = (payload) => (dispatch) => {
    return axios({
        method: "POST",
        url: "http://localhost:5000/api/user/projects",
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            dispatch(getClientProjects(resp.data.projects));
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getUserEOIData = (payload) => (dispatch) => {
    return axios({
        method: "POST",
        url: "http://localhost:5000/api/user/eoi/projects",
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then((resp) => {
            dispatch(getUserEOI(resp.data.projects))
        })
        .catch((err) => {
            console.log(err);
        })
}

export const submitUserEOI = (payload, projectId, userId, role) => (dispatch) => {
    return axios({
        method: "PUT",
        url: `http://localhost:5000/api/update/projects/${projectId}`,
        headers: {
            'Content-Type': "application/json"
        },
        data: payload
    })
        .then(async (resp) => {
            if (role && role === "staff") {
                await dispatch(getUserEOIData({ "supervisorEOI.userId": userId }));
            }
            else if (role && role === "student") {
                await dispatch(getUserEOIData({ "eoi.userId": userId }));
            }
            else await (resp)
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getApprovedProjectsData = () => (dispatch) => {
    return axios({
        method: "GET",
        url: "http://localhost:5000/api/projects/all-active",
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then((resp) => {
            dispatch(getApprovedProjects(resp.data))
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getClientProjectsData = (payload) => (dispatch) => {
    return axios({
        method: "POST",
        url: "http://localhost:5000/api/client/projects",
        headers: {
            'Content-Type': "application/json"
        },
        data: { clientId: payload }
    })
        .then((resp) => {
            dispatch(getClientProjects(resp.data.projects));
        })
        .catch((err) => {
            console.log(err);
        })
}
