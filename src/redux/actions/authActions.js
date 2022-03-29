import axios from "axios";
import fakeStoreApi, { url } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constans/action-types";

export const signUp = () => async (dispatch) => {
    const response = await axios.post(
        'https://k4backend.osuka.dev/users/',
        {
            email: 'John@gmail.com',
            username: 'johnd',
            password: 'm38rmF$',
            role: 'user',
            name: {
                firstname: 'John',
                lastname: 'Doe',
            },
            address: {
                city: 'kilcoole',
                street: '7835 new road',
                number: 3,
                zipcode: '12926-3874',
            },
            phone: '1-570-236-7033',
        }
    )
        .then((token) => {
            localStorage.setItem("token", JSON.stringify(token.data));

            dispatch({
                type: ActionTypes.AUTH_SIGN_UP,
                token: token.data,
            });
        })
    console.log(response);
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