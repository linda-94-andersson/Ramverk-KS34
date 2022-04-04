import axios from "axios";
import { url } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constans/action-types";

export const signUp = (user) => async (dispatch) => {
    const res = await axios.post(`${url}/users`,
        {
            email: user.email,
            username: user.username,
            password: user.password,
            role: '',
            name: {
                firstname: user.firstname,
                lastname: user.lastname,
            },
            address: {
                city: user.city,
                street: user.street,
                number: user.number,
                zipcode: user.zipcode,
            },
            phone: user.phone,
        });

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

export const updateUserData = (userId, up) => async (dispatch) => {
    const res = await axios.patch(`${url}/users/${userId}`, {
        email: up.email,
        username: up.username,
        password: up.password,
        role: '',
        name: {
            firstname: up.firstname,
            lastname: up.lastname,
        },
        address: {
            city: up.city,
            street: up.street,
            number: up.number,
            zipcode: up.zipcode,
        },
        phone: up.phone,
    });

    dispatch({
        type: ActionTypes.UPDATE_USERDATA,
        upData: res.data,
    });
    console.log(res, " res updateUserData");
}


export const getAllUsers = () => async (dispatch) => {
    const res = await axios.get(`${url}/users`);
    dispatch({
        type: ActionTypes.GET_ALL_USERS,
        users: res.data,
    });
    console.log(res.data, " res getAllUsers")
}