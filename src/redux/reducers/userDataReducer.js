import { ActionTypes } from "../constans/action-types";

const initialState = {
    userData: JSON.parse(localStorage.getItem("user")),
}

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERDATA:
            return { ...initialState, userData: action.userData, };
        case ActionTypes.SIGN_OUT:
            localStorage.removeItem("user");
            return { ...initialState, userData: null };
        default:
            return state;
    }
}

export default userDataReducer