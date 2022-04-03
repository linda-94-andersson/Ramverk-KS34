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
import {
  deleteProd,
  getCarts,
  updateProductData,
} from "../redux/actions/productActions";
import { replaceItemAtIndex, removeItemAtIndex } from "../utils";

function Admin() {
  const products = useSelector((state) => state.allProducts.products);
  const allUsers = useSelector((state) => state.allUsers.users);
  const getAllCarts = useSelector((state) => state.allCarts.getCarts);
  const auth = useAuth();
  const dispatch = useDispatch();
  const [prodData, setProdData] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getCarts());
  }, []);

  const handleUpdate = (product, key, value) => {
    const i = prodData.findIndex((prod) => {
      return prod.id === product.id;
    });
    if (i < 0) {
      setProdData([...prodData, { ...product, [key]: value }]);
      return;
    }
    setProdData(
      replaceItemAtIndex(prodData, i, { ...prodData[i], [key]: value })
    );
  };

  const handleSubmit = (e, productId) => {
    e.preventDefault();
    const i = prodData.findIndex((prod) => prod.id === productId);
    if (i < 0) {
      return;
    }
    dispatch(updateProductData(prodData[i]));
    setProdData(removeItemAtIndex(prodData, i));
  };

  const handleDel = (id) => {
    dispatch(deleteProd(id));
  };

  const renderProducts = () => {
    if (!products.length) return <div>Loading products...</div>;
    return products.map((product) => {
      const data = prodData.find((prod) => {
        return prod.id === product.id;
      });
      const { id, title, image, price, category } = data || product;
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
                  <Form onSubmit={(e) => handleSubmit(e, id)}>
                    <Form.Group>
                      <Card.Title>
                        <Form.Control
                          type="text"
                          value={title}
                          onChange={(e) =>
                            handleUpdate(product, "title", e.target.value)
                          }
                        />
                      </Card.Title>
                      <Card.Subtitle style={{ margin: 5 }}>
                        <Form.Control
                          type="text"
                          value={price}
                          onChange={(e) =>
                            handleUpdate(product, "price", e.target.value)
                          }
                        />
                        <Form.Control
                          type="text"
                          value={category}
                          onChange={(e) =>
                            handleUpdate(product, "category", e.target.value)
                          }
                        />
                      </Card.Subtitle>
                    </Form.Group>
                    <Button variant="dark" style={{ margin: 5 }} type="submit">
                      UPDATE PRODUCT
                    </Button>
                    <Button
                      variant="dark"
                      style={{ margin: 5 }}
                      type="button"
                      onClick={() => handleDel(id)}
                    >
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
    if (!allUsers.length) return <div>Loading users...</div>;
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
                  <span style={{ marginLeft: 10 }}>{password}</span>,
                  <span style={{ marginLeft: 10 }}>{name.firstname}</span>
                  <span style={{ marginLeft: 10 }}>{name.lastname}</span>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          )}
        </section>
      );
    });
  };

  const renderCarts = () => {
    if (!getAllCarts.length) return <div>Loading carts...</div>;
    return getAllCarts.map((cart) => {
      const { id, userId, date, products } = cart;
      const user = allUsers.find((user) => user.id === userId);
      return (
        <section key={id}>
          <Container>
            <ListGroup>
              <ListGroup.Item>
                User: {!user ? userId : user.username}, {date},
                {products.map(({ productId, quantity }) => {
                  return (
                    <span key={`cart-${id}-${productId}`}>
                      {" "}
                      Product: {productId}, Quantity: {quantity},
                    </span>
                  );
                })}
              </ListGroup.Item>
            </ListGroup>
          </Container>
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
              <ListGroup.Item>{renderCarts()}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Button variant="dark" className="back-to-top" onClick={scrollToTop}>
          &#8679;
        </Button>
      </Container>
    </>
  );
}

export default Admin;
