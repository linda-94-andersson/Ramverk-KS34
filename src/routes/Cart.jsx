import React, { useEffect, useState } from "react";
import { Button, ListGroup, Row, Col, Image, Card } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";

function Cart() {
  const {
    state: { cart },
    cartDispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  return (
    <>
      <div className="cart">
        <div className="productContainer">
          <ListGroup>
            {cart.map((props) => (
              <ListGroup.Item
                key={props.id}
                style={{ minHeight: 200, width: "65vw" }}
                className="cart-list-g-item"
              >
                <Row>
                  <Col md={2}>
                    <Image
                      style={{ objectFit: "contain", maxHeight: 180 }}
                      src={props.image}
                      alt={props.title}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={2}>
                    <span>{props.title}</span>
                  </Col>
                  <Col md={2}>
                    <span>${props.price}</span>
                  </Col>
                  <Col
                    md={2}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      style={{
                        minWidth: 100,
                        margin: 20,
                        height: 40,
                      }}
                      value={props.qty}
                      variant="dark"
                      onClick={(e) =>
                        cartDispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: props.id,
                            qty: e.target.value - 1,
                          },
                        })
                      }
                    >
                      -
                    </Button>
                    <Card
                      style={{
                        padding: 2,
                        minWidth: 100,
                        alignItems: "center",
                        height: 40,
                        justifyContent: "center",
                      }}
                    >
                      {props.qty}
                    </Card>
                    <Button
                      style={{ minWidth: 100, margin: 20, height: 40 }}
                      value={props.qty}
                      variant="dark"
                      onClick={(e) => {
                        cartDispatch({
                          type: "ADD_TO_QTY",
                          payload: {
                            id: props.id,
                            qty: e.target.value + 1,
                          },
                        });
                      }}
                    >
                      +
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      style={{ marginTop: 20 }}
                      type="button"
                      variant="light"
                      onClick={() =>
                        cartDispatch({
                          type: "REMOVE_FROM_CART",
                          payload: props,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="filters summary">
          <span className="title">Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total: $ {total}
          </span>
          <Button type="button" disabled={cart.length === 0}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cart;
