import { ActionTypes } from "../constans/action-types";

const initialState = JSON.parse(localStorage.getItem("user"));

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERDATA:
            return { ...initialState, ...action.userData, };
        case ActionTypes.SIGN_OUT:
            localStorage.removeItem("user");
            return { ...initialState, userData: null };
        case ActionTypes.UPDATE_USERDATA:
            return { ...initialState, ...action.upData, };
        default:
            return state;
    }
}

export default userDataReducer