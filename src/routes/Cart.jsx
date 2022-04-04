import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, Row, Col, Image, Card } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../redux/context/Context";
import { ActionTypes } from "../redux/constans/action-types";

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
      {Object.keys(cart).length === 0 ? (
        <div style={{ display: "flex" }}>
          <div style={{ width: "60vw", padding: 15 }}>
            <ListGroup>
              <ListGroup.Item
                style={{ minHeight: 200, width: "55vw" }}
                className="cart-list-g-item"
              >
                <Row>
                  <Col md={2}>
                    <span>Cart is Empty!</span>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div
            style={{
              backgroundColor: "#343a40",
              color: "white",
              padding: 30,
              display: "flex",
              flexDirection: "column",
              minWidth: "40vw",
            }}
          >
            <span style={{ fontSize: 20 }}>Subtotal ({cart.length}) items</span>
            <span style={{ fontWeight: 700, fontSize: 15, paddingBottom: 25 }}>
              Total: $ {total}
            </span>
            <Button type="button" disabled={cart.length === 0}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <div style={{ width: "60vw", padding: 15 }}>
            <ListGroup>
              {cart.map((props) => (
                <ListGroup.Item
                  key={props.id}
                  style={{ minHeight: 200, width: "55vw" }}
                  className="cart-list-g-item"
                >
                  <Row>
                    <Col md={2}>
                      <Link to={`/product/${props.id}`}>
                        <Image
                          style={{ objectFit: "contain", maxHeight: 180 }}
                          src={props.image}
                          alt={props.title}
                          fluid
                          rounded
                        />
                      </Link>
                    </Col>
                    <Col md={2}>
                      <Link to={`/product/${props.id}`}>
                        <span>{props.title}</span>
                      </Link>
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
                            type: ActionTypes.CHANGE_CART_QTY,
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
                            type: ActionTypes.ADD_TO_QTY,
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
                            type: ActionTypes.REMOVE_FROM_CART,
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
          <div
            style={{
              backgroundColor: "#343a40",
              color: "white",
              padding: 30,
              display: "flex",
              flexDirection: "column",
              minWidth: "40vw",
            }}
          >
            <span style={{ fontSize: 20 }}>Subtotal ({cart.length}) items</span>
            <span style={{ fontWeight: 700, fontSize: 15, paddingBottom: 25 }}>
              Total: $ {total}
            </span>
            <Button type="button">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </>
  );
}
export default Cart;
