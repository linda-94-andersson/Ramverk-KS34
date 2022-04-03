import fakeStoreApi from "../../apis/fakeStoreApi";
import axios from "axios";
import { url } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constans/action-types"

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data
    });
    console.log(response, " res all fetchProducts");
};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({
        type: ActionTypes.SELECTED_PRODUCT,
        payload: response.data
    });
    console.log(response, " res single fetchProduct");
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    };
};

export const getAllCate = () => async (dispatch) => {
    const res = await axios.get(`${url}/products/categories`);
    dispatch({
        type: ActionTypes.GET_CATEGORY,
        payload: res.data,
    });
    console.log(res, " res allCate");
}

export const getCarts = () => async (dispatch) => {
    const res = await axios.get(`${url}/carts`);
    dispatch({
        type: ActionTypes.GET_CARTS,
        getCarts: res.data,
    });
    console.log(res.data, " res fetchCarts");
}

export const deleteProd = (id) => async (dispatch) => {
    const res = await axios.delete(`${url}/products/${id}`);
    dispatch({
        type: ActionTypes.DELETE_PRODUCT,
        payload: res.data,
    });
    console.log(res, " res deleteProducts");
}

export const updateProductData = (data) => async (dispatch) => {
    const res = await axios.patch(`${url}/products/${data.id}`, data);
    dispatch({
        type: ActionTypes.UPDATE_PRODUCT,
        payload: res.data,
    });
    console.log(res, " res updateProductData");
}