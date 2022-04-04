import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
import authReducer from "./authReducer";
import signInOutReducer from "./signInOutReducer";
import userDataReducer from "./userDataReducer";
import allUsersReducer from "./allUsersReducer";
import { getCateReducer } from "./getCateReducer";
import getCartsReducer from "./getCartsReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
    filter: filterReducer,
    auth: authReducer,
    signInOut: signInOutReducer,
    userData: userDataReducer,
    allUsers: allUsersReducer,
    getAllCate: getCateReducer,
    allCarts: getCartsReducer,
});

export default reducers; 