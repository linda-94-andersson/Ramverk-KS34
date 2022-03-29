import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/actions/authActions";

function SignIn() {
  const dispatch = useDispatch();
  const sign = useSelector((state) => state.signIn);
  console.log(sign , " In");

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(user));
    setUser({
      username: "",
      password: "",
    });
  };

  if (sign.token) return <Navigate to="/profile" />;

  return (
    <div>
      <Form style={{ width: "50%" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicNameIn">
          <Form.Label>Your username</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordIn">
          <Form.Label>Your password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
