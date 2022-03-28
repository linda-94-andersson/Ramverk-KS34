import React from "react";
import { Form, Button } from "react-bootstrap";
import { CartState } from "../redux/context/Context";

const Filters = () => {
  const {
    filterState: { sort },
    filterDispatch,
  } = CartState();

  const refresh = () => {
    // it re-renders the site, dont have a better solution yet
    window.location.reload();
  };

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span className="filter-items">
        <span>
          <Form.Check
            style={{ padding: 10 }}
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={() =>
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            style={{ padding: 10 }}
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={() =>
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
        </span>
      </span>
      <Button
        variant="light"
        onClick={() => {
          filterDispatch({
            type: "CLEAR_FILTERS",
          });
          refresh();
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
