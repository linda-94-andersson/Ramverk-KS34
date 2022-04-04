import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Container,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  Button,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../redux/context/Context";
import { singOut } from "../redux/actions/authActions";
import { ActionTypes } from "../redux/constans/action-types";

const Header = () => {
  const {
    state: { cart },
    cartDispatch,
    filterDispatch,
  } = CartState();

  const sign = useSelector((state) => state.signInOut);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(singOut());
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      collapseOnSelect
      expand="lg"
      style={{ width: "100vw" }}
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
                style={{ width: 300 }}
                type="search"
                placeholder="Search a product..."
                className="m-auto"
                aria-label="Search"
                onChange={(e) => {
                  filterDispatch({
                    type: ActionTypes.FILTER_BY_SEARCH,
                    payload: e.target.value,
                  });
                }}
              />
            </Navbar.Text>
          )}
          <Nav className="me-auto">
            <Nav style={{ padding: 5 }}>
              <Link to="/">
                <span style={{ color: "white" }}>Home</span>
              </Link>
            </Nav>
            <Nav style={{ padding: 5 }}>
              <Link to="/products">
                <span style={{ color: "white" }}>Products</span>
              </Link>
            </Nav>
            <Nav style={{ padding: 5 }}>
              <Link to="/cart">
                <span style={{ color: "white" }}>Go to Cart</span>
              </Link>
            </Nav>
            {useLocation().pathname.split("/")[1] !== "cart" && (
              <Dropdown
                align="end"
                className="dropdown"
                style={{ marginBottom: 7 }}
              >
                <Dropdown.Toggle variant="success" style={{ marginLeft: 7 }}>
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
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "0 20px",
                            marginBottom: 20,
                          }}
                          key={props.id}
                        >
                          <img
                            style={{
                              width: 50,
                              heigth: 50,
                              objectFit: "contain",
                            }}
                            src={props.image}
                            alt={props.title}
                          />
                          <div
                            style={{
                              display: "flex",
                              flex: 1,
                              padding: "0px 20px",
                              flexDirection: "column",
                            }}
                          >
                            <span>{props.title}</span>
                            <span>${props.price}</span>
                          </div>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              cartDispatch({
                                type: ActionTypes.REMOVE_FROM_CART,
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
            {sign.token ? (
              <>
                <Link to="/profile">
                  <Button
                    variant="light"
                    style={{ marginLeft: 7, marginBottom: 7 }}
                  >
                    Profile
                  </Button>
                </Link>
                <span>
                  <Button
                    variant="light"
                    style={{ marginLeft: 7 }}
                    onClick={() => handleSignOut()}
                  >
                    Logout
                  </Button>
                </span>
              </>
            ) : (
              <Link to="/login">
                <Button
                  variant="light"
                  style={{ marginLeft: 7, marginBottom: 7 }}
                >
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
