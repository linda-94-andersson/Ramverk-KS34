import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import Filters from "../containers/Filters";
import ProductComponent from "../containers/ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="product-page">
      <Filters />
      <div className="filter-container">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductPage;
