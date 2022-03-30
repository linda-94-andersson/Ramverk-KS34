import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      username: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/login" />;

  return (
    <Container style={{ marginTop: 40, width: "50%" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Register username</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter a username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Register Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
