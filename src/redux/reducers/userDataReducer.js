import { ActionTypes } from "../constans/action-types";

const initialState = {
    userData: JSON.parse(localStorage.getItem("user")),
}

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERDATA:
            return { ...initialState, userData: action.userData, };
        default:
            return state;
    }
}

export default userDataReducer