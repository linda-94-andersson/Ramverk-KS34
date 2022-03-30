import React, { useEffect, useRef } from "react";
import { Col, Container, ListGroup, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAllUsers } from "../redux/actions/authActions";

function Admin() {
  const dispatch = useDispatch();
  const sign = useSelector((state) => state.signInOut);
  const userData = useSelector((state) => state.userData);
  const products = useSelector((state) => state.allProducts.products);
  const allUsers = useSelector((state) => state.allUsers.users);
  console.log(allUsers, " allUsers");

  //   useEffect(() => {
  //     dispatch(getAllUsers());
  //   }, []);

  const rednerProducts = products.map((product) => {
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
                <Card.Title>
                  <h2 style={{ fontSize: 15 }}>{title}</h2>
                </Card.Title>
                <Card.Subtitle>
                  <h3 style={{ fontSize: 15, display: "inline", padding: 5 }}>
                    ${price}
                  </h3>
                  <h4 style={{ fontSize: 15, display: "inline", padding: 5 }}>
                    {category}
                  </h4>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Container>
        )}
      </section>
    );
  });

  if (!allUsers) {
    console.log("loading all users");
  } else {
    console.log("all users loaded");
  }

  const renderUsers = allUsers.map((user) => {
    const { id, email, username, password } = user;
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
              </ListGroup.Item>
            </ListGroup>
          </Container>
        )}
      </section>
    );
  });

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

  if (
    (userData.userData.role !== "admin" && !sign.token) ||
    (userData.userData.role !== "admin" && sign.token)
  )
    return <Navigate to="/profile" />;

  return (
    <>
      {allUsers === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <Container>
            <Row>
              <Col>All products</Col>
              <Col>All users</Col>
            </Row>
            <Row>
              <Col>
                <ListGroup style={{ display: "block" }}>
                  {rednerProducts}
                </ListGroup>
              </Col>
              <Col>
                <ListGroup style={{ display: "block" }}>
                  <ListGroup.Item>{renderUsers}</ListGroup.Item>
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
