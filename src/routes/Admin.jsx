import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Container,
  ListGroup,
  Row,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { getAllUsers } from "../redux/actions/authActions";
import { getCarts } from "../redux/actions/productActions";

function Admin() {
  const products = useSelector((state) => state.allProducts.products);
  const allUsers = useSelector((state) => state.allUsers.users);
  const getAllCarts = useSelector((state) => state.allCarts.getCarts);
  const auth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getCarts());
  }, []);

  const renderProducts = () => {
    if (!products) return <div>Loading products...</div>;
    return products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <section key={id}>
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <Container>
              <Card style={{ paddingTop: 5 }}>
                <Card.Img
                  style={{ height: 100, objectFit: "contain" }}
                  src={image}
                  alt={title}
                />
                <Card.Body style={{ display: "inline" }}>
                  <Form>
                    <Form.Group>
                      <Card.Title>
                        <Form.Control type="text" value={title} />
                      </Card.Title>
                      <Card.Subtitle style={{ margin: 5 }}>
                        <Form.Control type="text" value={"$" + price} />
                        <Form.Control type="text" value={category} />
                      </Card.Subtitle>
                    </Form.Group>
                    <Button variant="dark" style={{ margin: 5 }}>
                      UPDATE PRODUCT
                    </Button>
                    <Button variant="dark" style={{ margin: 5 }}>
                      DELETE PRODUCT!
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Container>
          )}
        </section>
      );
    });
  };

  const renderUsers = () => {
    if (!allUsers) return <div>Loading users...</div>;
    return allUsers.map((user) => {
      const { id, email, username, password, name } = user;
      return (
        <section key={id}>
          {Object.keys(user).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <Container>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{email}</span>,
                  <span style={{ marginLeft: 10 }}>{username}</span>,
                  <span style={{ marginLeft: 10 }}>{password}</span>
                  <span style={{ marginLeft: 10 }}>{name.firstname}</span>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          )}
        </section>
      );
    });
  };


  const renderCarts = () => {
    if (getAllCarts) return <div>Loading carts...</div>;
    return getAllCarts.map((cart) => {
      const { id, userId, date } = cart;
      return (
        <section key={id}>
          {Object.keys(cart).length === 0 ? (
            <div>...loading</div>
          ) : (
            <>
              {Object.entries(cart)}

              <Container>
                <ListGroup>
                  <ListGroup.Item>
                    {"User: "+{userId}}, {date},{"Product: "},
                  </ListGroup.Item>
                </ListGroup>
              </Container>
            </>
          )}
        </section>
      );
    });
  };

  const setShowButton = useRef(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton.current = true;
      } else {
        setShowButton.current = false;
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return !auth.isAdmin() ? (
    <Navigate to="/login" />
  ) : (
    <>
      {allUsers === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <Container>
            <Row>
              <Col>All products</Col>
              <Col>All users</Col>
              <Col>Carts</Col>
            </Row>
            <Row>
              <Col>
                <ListGroup style={{ display: "block" }}>
                  {renderProducts()}
                </ListGroup>
              </Col>
              <Col>
                <ListGroup style={{ display: "block" }}>
                  <ListGroup.Item>{renderUsers()}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup style={{ display: "block" }}>
                  <ListGroup.Item>CART GOES HERE{renderCarts()}</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Button
              variant="dark"
              className="back-to-top"
              onClick={scrollToTop}
            >
              &#8679;
            </Button>
          </Container>
        </>
      )}
    </>
  );
}

export default Admin;
