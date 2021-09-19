import axios from "axios";
// import { getUserData } from "../authRedux/actions";

// export const ADD_NEW_PROJECT = "ADD_NEW_PROJECT";

// export const addProjectData = (payload) => ({
//     type: ADD_NEW_PROJECT,
//     payload
// });

export const GET_CLIENT_PROJECTS = "GET_CLIENT_PROJECTS";

export const getClientProjects = (payload) => ({
    type: GET_CLIENT_PROJECTS,
    payload
})

// export const addNewProject = (_id, payload, username, role) => (dispatch) => {
//     console.log(_id, payload)
//     return axios({
//         method: "PUT",
//         url: `http://localhost:5000/api/clients/${_id}`,
//         headers: {
//             'Content-Type': "application/json"
//         },
//         data: { projects: payload }
//     })
//         .then((resp) => {
//             console.log(resp);
//             dispatch(addProjectData(resp));
//             dispatch(getUserData(username, role))
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

export const getClientProjectsData = (payload) => (dispatch) => {
    console.log(payload);
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
