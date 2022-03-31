import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { signUp } from "../redux/actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      city: "",
      street: "",
      number: "",
      zipcode: "",
      phone: "",
    });
  };

  return (
    <Container style={{ marginTop: 40, width: "50%" }}>
      <>
        {auth._id ? (
          <Link to="/login">
            <Button variant="dark" style={{ margin: 100 }}>
              Sign up successful. Continue to login!
            </Button>
          </Link>
        ) : (
          <Form style={{ display: "flex" }} onSubmit={handleSubmit}>
            <Container>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Register email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter an email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Register username</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter a username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Register Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter a password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFirstname">
                <Form.Label>Register firstname</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter a firstname"
                  value={user.firstname}
                  onChange={(e) =>
                    setUser({ ...user, firstname: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastname">
                <Form.Label>Register lastname</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter a lastname"
                  value={user.lastname}
                  onChange={(e) =>
                    setUser({ ...user, lastname: e.target.value })
                  }
                />
              </Form.Group>
            </Container>
            <Container>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>Register city</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter a city"
                  value={user.city}
                  onChange={(e) => setUser({ ...user, city: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicStreet">
                <Form.Label>Register street</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter a street"
                  value={user.street}
                  onChange={(e) => setUser({ ...user, street: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Register number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter a number"
                  value={user.number}
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicZipcode">
                <Form.Label>Register zipcode</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter a zipcode"
                  value={user.zipcode}
                  onChange={(e) =>
                    setUser({ ...user, zipcode: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Register phone</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}"
                  placeholder="Enter a phone"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
                <Form.Text>Must use format 123-45-678-90</Form.Text>
              </Form.Group>
              <Button variant="dark" type="submit">
                Sign up
              </Button>
            </Container>
          </Form>
        )}
      </>
    </Container>
  );
};

export default SignUp;
