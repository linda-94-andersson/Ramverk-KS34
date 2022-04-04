import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { CartState } from "../redux/context/Context";
import { getAllCate } from "../redux/actions/productActions";
import { ActionTypes } from "../redux/constans/action-types";

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
    <Container
      style={{
        backgroundColor: "#343a40",
        color: "white",
        padding: 15,
        display: "flex",
        flexDirection: "column",
        width: 160,
        margin: 0,
      }}
    >
      <span style={{ fontSize: 25, textTransform: "uppercase" }}>
        Filter Products
      </span>
      <span style={{ padding: 20 }}>
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
                type: ActionTypes.SORT_BY_PRICE,
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
                type: ActionTypes.SORT_BY_PRICE,
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
                    type: ActionTypes.SORT_BY_CATEGORY,
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
            type: ActionTypes.CLEAR_FILTERS,
          });
        }}
      >
        Clear Filters
      </Button>
    </Container>
  );
};

export default Filters;
