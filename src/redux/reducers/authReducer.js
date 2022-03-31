import { ActionTypes } from "../constans/action-types";

const initialState = {
    token: null,
    username: null,
    password: null,
    email: null,
    firstname: null,
    lastname: null,
    city: null,
    street: null,
    number: null,
    zipcode: null,
    phone: null,
    _id: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_SIGN_UP:
            const user = (action.token)
            return { ...initialState, token: action.token, username: user.username, password: user.password, email: user.email, firstname: user.firstname, lastname: user.lastname, city: user.city, street: user.street, number: user.number, zipcode: user.zipcode, phone: user.phone, _id: user._id };
        default:
            return state;
    }
};

export default authReducer;