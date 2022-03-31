import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

function ProfilePage() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const sign = useSelector((state) => state.signInOut);
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLoggedIn()) {
      navigate("/login");
    }
  }, [userData, sign]);

  return (
    <>
      {!auth.hasUserData() ? (
        <div>Loading...</div>
      ) : (
        <Container style={{ marginTop: 40 }}>
          <Row>
            <Col style={{ display: "flex" }}>
              <h2>Your Account</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup style={{ display: "block" }}>
                <ListGroup.Item>Username</ListGroup.Item>
                <ListGroup.Item>Email</ListGroup.Item>
                <ListGroup.Item>Password</ListGroup.Item>
                <ListGroup.Item>Firtname</ListGroup.Item>
                <ListGroup.Item>Lastname</ListGroup.Item>
                <ListGroup.Item>Adress</ListGroup.Item>
                <ListGroup.Item>City</ListGroup.Item>
                <ListGroup.Item>Street</ListGroup.Item>
                <ListGroup.Item>Number</ListGroup.Item>
                <ListGroup.Item>Zipcode</ListGroup.Item>
                <ListGroup.Item>Phone</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.username}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.email}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.password}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.name.firstname}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.name.lastname}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}></ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.address.city}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.address.street}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.address.number}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.address.zipcode}
              </ListGroup.Item>
              <ListGroup.Item style={{ minHeight: 41 }}>
                {userData.userData.phone}
              </ListGroup.Item>
            </Col>
          </Row>
          <Container>
            {!auth.isAdmin() ? (
              <></>
            ) : (
              <Link to="/admin">
                <Button variant="dark" style={{ marginTop: 40 }}>
                  Admin page
                </Button>
              </Link>
            )}
          </Container>
        </Container>
      )}
    </>
  );
}

export default ProfilePage;
