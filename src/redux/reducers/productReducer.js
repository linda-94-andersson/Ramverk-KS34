import { ActionTypes } from "../constans/action-types";
import { replaceArrayItem } from "../../utils";

const initialState = {
    products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.UPDATE_PRODUCT:
            return { ...state, products: replaceArrayItem(state.products, payload, (product) => product.id === payload.id) };
        case ActionTypes.DELETE_PRODUCT:
            return { ...state, products: state.products.filter((c) => c.id !== payload.id,) };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};