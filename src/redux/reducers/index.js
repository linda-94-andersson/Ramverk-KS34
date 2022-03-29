import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
import authReducer from "./authReducer";
import signInReducer from "./signInReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
    filter: filterReducer,
    auth: authReducer,
    signIn: signInReducer,
});

export default reducers; 