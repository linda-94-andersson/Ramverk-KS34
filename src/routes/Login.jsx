import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import SignIn from "../containers/SignIn";
import SignUp from "./SignUp";

function Login() {
  return (
    <Container style={{ marginTop: 40 }}>
      <Row style={{ alignItems: "center" }}>
        <Col>
          <SignIn />
        </Col>
        <Col style={{ fontWeight: 700 }}>
          <span>
            Not already a member? <br />
            Sign up right here &#8594;
          </span>
          <Link to="/register">
            <Button variant="dark">Register today!</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
