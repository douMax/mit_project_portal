// import axios from "axios";
// import { getUserData } from "../authRedux/actions";

// export const ADD_NEW_PROJECT = "ADD_NEW_PROJECT";

// export const addProjectData = (payload) => ({
//     type: ADD_NEW_PROJECT,
//     payload
// });



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

