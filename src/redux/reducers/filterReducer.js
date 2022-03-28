import { ActionTypes } from "../constans/action-types";

const initialState = {
    searchQuery: "",
    sortByCATE: "",
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SORT_BY_PRICE:
            return { ...state, sort: action.payload };
        case ActionTypes.FILTER_BY_SEARCH:
            return { ...state, searchQuery: action.payload };
        case ActionTypes.CLEAR_FILTERS:
            return {};
        case ActionTypes.SORT_BY_CATEGORY:
            return { ...state, sortByCATE: action.payload };
        default:
            return state;
    }
};