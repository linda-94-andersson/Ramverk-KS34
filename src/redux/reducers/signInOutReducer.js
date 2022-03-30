import { ActionTypes } from "../constans/action-types";

const initialState = {
    token: JSON.parse(localStorage.getItem("token")),
}

const signInOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN:
            return { ...initialState, token: action.token };
        case ActionTypes.SIGN_OUT:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return { token: null, username: null, _id: null, };
        default:
            return state;
    }
}

export default signInOutReducer