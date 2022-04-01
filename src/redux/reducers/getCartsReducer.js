import { ActionTypes } from "../constans/action-types";

const getCartsReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.GET_CARTS:
            return { ...state, getCarts: action.getCarts, };
        default:
            return state;
    }
}

export default getCartsReducer