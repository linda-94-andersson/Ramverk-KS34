import React from "react";
import Filters from "../containers/Filters";
import ProductComponent from "../containers/ProductComponent";

const ProductPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Filters />
      <div
        style={{
          display: "flex",
          width: "78%",
          padding: "0px 20px",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductPage;
