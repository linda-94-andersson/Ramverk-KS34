import axios from "axios";
import { url } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constans/action-types";

export const signUp = (user) => async (dispatch) => {
    const res = await axios.post(`${url}/users`,
        {
            email: 'email@gmail.com',
            username: user.username,
            password: user.password,
            role: '',
            name: {
                firstname: 'firstname',
                lastname: 'lastname',
            },
            address: {
                city: 'stockholm',
                street: 'gatan',
                number: 1,
                zipcode: '11-11',
            },
            phone: '070-000-11-11',
        });
    localStorage.setItem("token", JSON.stringify(res.data));

    dispatch({
        type: ActionTypes.AUTH_SIGN_UP,
        token: res.data,
    });
    console.log(res.data, " res signUp");
}


export const signIn = (creds) => async (dispatch) => {
    const res = await axios.post(`${url}/auth/login`, creds);
    localStorage.setItem("token", JSON.stringify(res.data));

    dispatch({
        type: ActionTypes.SIGN_IN,
        token: res.data,
    });
    console.log(res.data, " res signIn")
}


export const singOut = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.SIGN_OUT,
        });
    }
}

export const getUserData = (userId) => async (dispatch) => {
    const res = await axios.get(`${url}/users/${userId}`);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch({
        type: ActionTypes.GET_USERDATA,
        userData: res.data,
    });
    console.log(res.data, " res getUserData")
}


export const getAllUsers = () => async (dispatch) => {
    const res = await axios.get(`${url}/users`);
    dispatch({
        type: ActionTypes.GET_ALL_USERS,
        users: res.data,
    });
    console.log(res.data, " res getAllUsers")
}

// Lindas barve attemnts that failed
// export const signUp1 = (user) => (dispatch) => {
//     axios.post(`${url}/users`,
//         {
//             email: 'email@gmail.com',
//             username: user.username,
//             password: user.password,
//             role: '',
//             name: {
//                 firstname: 'firstname',
//                 lastname: 'lastname',
//             },
//             address: {
//                 city: 'stockholm',
//                 street: 'gatan',
//                 number: 1,
//                 zipcode: '11-11',
//             },
//             phone: '070-000-11-11',
//         }
//     )
//         .then((token) => {
//             localStorage.setItem("token", JSON.stringify(token.data));
//             console.log(token);

//             dispatch({
//                 type: ActionTypes.AUTH_SIGN_UP,
//                 token: token.data,
//             });
//         })
//         .catch((error) => {
//             console.log(error.response, " error signUp");
//         })
// }


// export const signIn1 = (creds) => (dispatch) => {
//     axios.post(`${url}/auth/login`, creds)
//         .then((token) => {
//             localStorage.setItem("token", JSON.stringify(token.data));

//             dispatch({
//                 type: ActionTypes.SIGN_IN,
//                 token: token.data,
//             });
//         })
//         .catch((error) => {
//             console.log(error.response, " error signIn");
//         })
// }


// export const getUser1 = (userId) => (dispatch) => {
//     axios.get(`${url}/users/${userId}`)
//         .then((res) => {
//             localStorage.setItem("user", JSON.stringify(res.data));
//             dispatch({
//                 type: ActionTypes.GET_USERDATA,
//                 userData: res.data,
//             });
//             console.log(res.data, " res")
//         })
//         .catch((error) => {
//             console.log(error, "allError");
//         });
// }


// export const getAllUsers2 = () => {
//     return async function (dispatch) {
//         const users = await axios.get(`${url}/users`);
//         dispatch({
//             type: ActionTypes.GET_ALL_USERS,
//             users: users.data,
//         });
//     }
// }

// export const getAllUsers1 = (dispatch) => {
//     axios.get(`${url}/users`)
//         .then((res) => {
//             dispatch({
//                 type: ActionTypes.GET_ALL_USERS,
//                 users: res.data,
//             });
//             console.log(res.data, "res allUsers");
//         })
//         .catch((error) => {
//             console.log(error, "allUserError")
//         });
// }

// export const signUp = (user) => {
//     return async function (dispatch) {
//         const response = await axios
//             .post(`${url}/users`, user)
//             .then((token) => {
//                 localStorage.setItem("token", JSON.stringify(token.data));

//                 dispatch({
//                     type: ActionTypes.AUTH_SIGN_UP,
//                     token: token.data,
//                 });
//             })
//             .catch(error => {
//                 console.log(error.response + " error")
//             });
//     }
// }

// export const signUp = async () => {
//     try {

//         const response = await axios.post(`${url}/users`, JSON.stringify({ username, password }),
//             // {
//             //     headers: { 'Content-Type': 'application/json' }
//             // }
//         );
//         console.log(response?.data);
//         console.log(response?.accessToken);
//         console.log(JSON.stringify(response));
//     }
//     catch(err) {
//         if (!err?.response) {
//             console.log('No Server Response');
//         }
//     }
// }

// export const signUp = (user) => async (dispatch) => {
//     const token = await axios.post(`${url}/users`, {
//         data: user,
//         mode: "no-cors",
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//         }
//     })
//     dispatch({ type: ActionTypes.AUTH_SIGN_UP, token: token.data });
// };

// export const signUp = () => {
//     return async function(dispatch){
//         const token = await axios.get(`${url}/users`);
//         dispatch({type: ActionTypes.AUTH_SIGN_UP, token: token.data })
//     }
// }