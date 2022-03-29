import { ActionTypes } from "../constans/action-types";

const initialState = {
    token: JSON.parse(localStorage.getItem("token")),
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN:
            return { ...initialState, token: action.token };
        default:
            return state;
    }
}

export default signInReducer