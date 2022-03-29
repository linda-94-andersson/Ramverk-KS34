import { ActionTypes } from "../constans/action-types";

const initialState = {
    token: JSON.parse(localStorage.getItem("token")),
    username: null,
    _id: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_SIGN_UP:
            const user = (action.token)
            return { ...initialState, token: action.token, username: user.username, _id: user._id };
        default:
            return state;
    }
};

export default authReducer;