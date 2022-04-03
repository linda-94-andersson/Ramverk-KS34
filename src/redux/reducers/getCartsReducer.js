import { ActionTypes } from "../constans/action-types";

const getCartsReducer = (state = { getCarts: [] }, action) => {
    switch (action.type) {
        case ActionTypes.GET_CARTS:
            return { ...state, getCarts: action.getCarts, };
        default:
            return state;
    }
}

export default getCartsReducer