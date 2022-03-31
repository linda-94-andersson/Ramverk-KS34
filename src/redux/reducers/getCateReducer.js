import { ActionTypes } from "../constans/action-types";

const initialState = {
    getCate: [],
};

export const getCateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CATEGORY:
            return { ...state, getCate: payload }
        default:
            return state;
    }
};