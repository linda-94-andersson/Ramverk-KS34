import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { signIn } from "../redux/actions/authActions";

function SignIn() {
  const dispatch = useDispatch();
  const sign = useSelector((state) => state.signInOut);

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
      username: "",
      password: "",
    });
  };

  if (sign.token) return <Navigate to="/profile" />;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicNameIn">
          <Form.Label>Your username</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter username"
            value={creds.username}
            onChange={(e) => setCreds({ ...creds, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordIn">
          <Form.Label>Your password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
