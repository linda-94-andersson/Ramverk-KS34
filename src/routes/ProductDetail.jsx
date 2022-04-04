import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { CartState } from "../redux/context/Context";
import { ActionTypes } from "../redux/constans/action-types";

const ProductDetail = () => {
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description, id } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const {
    state: { cart, qty },
    cartDispatch,
  } = CartState();

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Container
          style={{ padding: 20, display: "flex", width: "70vw" }}
          key={id}
        >
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "100%", objectFit: "contain", height: "50vh" }}
              src={image}
              alt={title}
            />
            <Card.Body>
              <Card.Title>
                <h1>{title}</h1>
              </Card.Title>
              <Card.Subtitle style={{ paddingBottom: 10 }}>
                <h2>${price}</h2>
                <h3>Product information</h3>
                <h4>{category}</h4>
                <p>{description}</p>
              </Card.Subtitle>
              <Container>
                {cart.some((b) => b.id === id) ? (
                  <>
                    <Button
                      style={{ width: 150, marginLeft: 20, marginBottom: 5 }}
                      onClick={() => {
                        cartDispatch({
                          type: ActionTypes.REMOVE_FROM_CART,
                          payload: product,
                        });
                      }}
                      variant="danger"
                    >
                      Remove from cart
                    </Button>
                    <Button
                      style={{ width: 150, marginLeft: 20, marginBottom: 5 }}
                      value={qty}
                      variant="dark"
                      onClick={(e) => {
                        cartDispatch({
                          type: ActionTypes.ADD_TO_QTY,
                          payload: {
                            id: id,
                            qty: e.target.value + 1,
                          },
                        });
                      }}
                    >
                      Add more +
                    </Button>
                  </>
                ) : (
                  <Button
                    style={{ width: 150, marginLeft: 20, marginBottom: 5 }}
                    variant="dark"
                    onClick={() => {
                      cartDispatch({
                        type: ActionTypes.ADD_TO_CART,
                        payload: product,
                      });
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
                <Link to="/cart">
                  <Button
                    style={{ width: 150, marginLeft: 20, marginBottom: 5 }}
                    variant="dark"
                  >
                    Go to cart
                  </Button>
                </Link>
                <Link to="/products">
                  <Button
                    style={{ width: 150, marginLeft: 20, marginBottom: 5 }}
                    variant="dark"
                  >
                    Back to products
                  </Button>
                </Link>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
};

export default ProductDetail;
