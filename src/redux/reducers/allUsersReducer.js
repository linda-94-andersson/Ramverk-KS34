import { ActionTypes } from "../constans/action-types";

const allUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_USERS:
            return { ...state, users: action.users };
        default:
            return state;
    }
}

export default allUsersReducer