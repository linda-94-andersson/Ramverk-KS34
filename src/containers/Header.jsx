import React from "react";
import {
  Badge,
  Container,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    cartDispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      collapseOnSelect
      expand="lg"
      style={{ minWidth: 400 }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <h2>TUNG STORE</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {useLocation().pathname.split("/")[1] !== "cart" && (
            <Navbar.Text className="search">
              <FormControl
                style={{ width: 400 }}
                type="search"
                placeholder="Search a product..."
                className="m-auto"
                aria-label="Search"
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
            </Navbar.Text>
          )}
          <Nav className="me-auto">
            <Nav style={{ padding: 5 }}>
              <Link to="/">
                <span className="nav">Home</span>
              </Link>
            </Nav>
            <Nav style={{ padding: 5 }}>
              <Link to="/products">
                <span className="nav">Products</span>
              </Link>
            </Nav>
            <Nav style={{ padding: 5 }}>
              <Link to="/cart">
                <span className="nav">Go to Cart</span>
              </Link>
            </Nav>
            {useLocation().pathname.split("/")[1] !== "cart" && (
              <Dropdown align="end" className="dropdown">
                <Dropdown.Toggle variant="success">
                  <i
                    className="fa-solid fa-cart-shopping"
                    color="white"
                    fontSize="25px"
                  ></i>
                  <Badge bg="none">{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 370 }}>
                  {cart.length > 0 ? (
                    <>
                      {cart.map((props) => (
                        <span className="cartitem" key={props.id}>
                          <img
                            src={props.image}
                            className="cartItemImg"
                            alt={props.title}
                          />
                          <div className="cartItemDetail">
                            <span>{props.title}</span>
                            <span>${props.price}</span>
                          </div>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              cartDispatch({
                                type: "REMOVE_FROM_CART",
                                payload: props,
                              })
                            }
                          />
                        </span>
                      ))}
                      <Link to="/cart">
                        <Button
                          variant="dark"
                          style={{ width: "95%", margin: "0 10px" }}
                        >
                          Go to Cart
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
