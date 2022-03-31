import React from "react";
import Filters from "../containers/Filters";
import ProductComponent from "../containers/ProductComponent";

const ProductPage = () => {
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
