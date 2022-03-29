import axios from "axios";
import { url } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constans/action-types";

export const signUp = (user) => (dispatch) => {
    axios.post(`${url}/users`,
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
                city: '',
                street: '',
                number: 1,
                zipcode: '',
            },
            phone: '',
        }
    )
        .then((token) => {
            localStorage.setItem("token", JSON.stringify(token.data));
            console.log(token);

            dispatch({
                type: ActionTypes.AUTH_SIGN_UP,
                token: token.data,
            });
        })
}

export const signIn = (user) => (dispatch) => {
    axios.post(`${url}/auth/login`, user)
        .then((token) => {
            localStorage.setItem("token", JSON.stringify(token.data));

            dispatch({
                type: ActionTypes.SIGN_IN,
                token: token.data,
            });
        })
}

// Lindas barve attemnts that failed
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