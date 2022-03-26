import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(fetchProducts());
  }, []);

  const products = useSelector((state) => state.allProducts.products);
  const cartProducts = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    qty: product.qty,
  }));

  const [state, cartDispatch] = useReducer(cartReducer, {
    products: cartProducts,
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  });

  localStorage.setItem("cart", JSON.stringify(state.cart));

  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: "",
  });

  return (
    <Cart.Provider
      value={{ state, cartDispatch, productState, productDispatch }}
    >
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
