import { ActionTypes } from "../constans/action-types";

const initialState = {
    cart: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case ActionTypes.ADD_TO_QTY:
            return { ...state, cart: state.cart.map((c) => c.id === action.payload.id ? { ...c, qty: c.qty + 1 } : c), };
        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id), };
        case ActionTypes.CHANGE_CART_QTY:
            return { ...state, cart: state.cart.filter((c) => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty), }
        default:
            return state;
    }
};