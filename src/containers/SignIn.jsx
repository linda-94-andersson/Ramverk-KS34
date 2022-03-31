import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signIn } from "../redux/actions/authActions";
import { getUserData } from "../redux/actions/authActions";
import useAuth from "../hooks/useAuth";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sign = useSelector((state) => state.signInOut);
  const userData = useSelector((state) => state.userData);
  const auth = useAuth();

  useEffect(() => {
    if (auth.isLoggedIn()) {
      navigate("/profile");
    }
  }, [userData, sign]);

  useEffect(() => {
    if (!auth.hasToken()) return;
    dispatch(getUserData(sign.token.userId));
  }, [sign]);

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
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
