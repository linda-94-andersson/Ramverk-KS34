import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { CartState } from "../redux/context/Context";
import { getAllCate } from "../redux/actions/productActions";

const Filters = () => {
  const {
    filterState: { sort, sortByCATE },
    filterDispatch,
  } = CartState();

  const dispatch = useDispatch();
  const getCate = useSelector((state) => state.getAllCate);

  useEffect(() => {
    dispatch(getAllCate());
  }, []);

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
            checked={sort === "lowToHigh"}
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
            checked={sort === "highToLow"}
          />
        </span>

        {getCate.getCate.map((cate) => {
          return (
            <span key={cate}>
              <Form.Check
                style={{ padding: 10, textTransform: "capitalize" }}
                label={cate}
                name="group2"
                type="checkbox"
                onChange={() => {
                  const index = sortByCATE.indexOf(cate);
                  filterDispatch({
                    type: "SORT_BY_CATEGORY",
                    payload:
                      index < 0
                        ? [...sortByCATE, cate]
                        : [
                            ...sortByCATE.slice(0, index),
                            ...sortByCATE.slice(index + 1),
                          ],
                  });
                }}
                checked={sortByCATE.includes(cate)}
              />
            </span>
          );
        })}
      </span>
      <Button
        variant="light"
        onClick={() => {
          filterDispatch({
            type: "CLEAR_FILTERS",
          });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
