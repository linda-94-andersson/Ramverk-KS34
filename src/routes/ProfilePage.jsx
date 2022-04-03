import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { updateUserData } from "../redux/actions/authActions";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const sign = useSelector((state) => state.signInOut);
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLoggedIn()) {
      navigate("/login");
    }
  }, [userData, sign]);

  useEffect(() => {
    // console.log(userData, " userDAta");
  }, [userData]);

  const [dataUp, setDataUp] = useState({
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const upDatedData = {
      username: dataUp.username || userData.username,
      password: dataUp.password || userData.password,
      email: dataUp.email || userData.email,
      firstname: dataUp.firstname || userData.name.firstname,
      lastname: dataUp.lastname || userData.name.lastname,
      city: dataUp.city || userData.address.city,
      street: dataUp.street || userData.address.street,
      number: dataUp.number || userData.address.number,
      zipcode: dataUp.zipcode || userData.address.zipcode,
      phone: dataUp.phone || userData.phone,
    };
    dispatch(updateUserData(sign.token.userId, upDatedData));
    setDataUp({
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
              <Form>
                <Form.Group style={{ marginTop: -25 }}>
                  <Form.Text>User</Form.Text>
                </Form.Group>
                <Form.Group
                  style={{
                    height: 38,
                    marginBottom: 15,
                    marginTop: 7,
                    textAlign: "end",
                  }}
                >
                  <Form.Label>Username</Form.Label>
                </Form.Group>
                <Form.Group
                  style={{ height: 38, marginBottom: 15, textAlign: "end" }}
                >
                  <Form.Label>Email</Form.Label>
                </Form.Group>
                <Form.Group
                  style={{ height: 38, marginBottom: 15, textAlign: "end" }}
                >
                  <Form.Label>Password</Form.Label>
                </Form.Group>
                <Form.Group
                  style={{ height: 38, marginBottom: 15, textAlign: "end" }}
                >
                  <Form.Label>Firstname</Form.Label>
                </Form.Group>
                <Form.Group
                  style={{ height: 38, marginBottom: 15, textAlign: "end" }}
                >
                  <Form.Label>Lastname</Form.Label>
                </Form.Group>
                <Form.Group>
                  <Form.Text>Address</Form.Text>
                </Form.Group>
                <Form.Group
                  style={{
                    height: 38,
                    marginBottom: 15,
                    marginTop: -20,
                    textAlign: "end",
                  }}
                >
                  <Form.Label>City</Form.Label>
                </Form.Group>
                <Form.Group
                  style={{ height: 38, marginBottom: 15, textAlign: "end" }}
                >
                  <Form.Label>Street</Form.Label>
                </Form.Group>
                <Form.Group
                  style={{ height: 38, marginBottom: 15, textAlign: "end" }}
                >
                  <Form.Label>Number</Form.Label>
                </Form.Group>
                <Form.Group
                  style={{ height: 38, marginBottom: 15, textAlign: "end" }}
                >
                  <Form.Label>Zipcode</Form.Label>
                </Form.Group>
                <Form.Group
                  style={{ height: 38, marginBottom: 15, textAlign: "end" }}
                >
                  <Form.Label>Phone</Form.Label>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="name"
                    placeholder={userData.username}
                    value={dataUp.username}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, username: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder={userData.email}
                    value={dataUp.email}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, email: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder={userData.password}
                    value={dataUp.password}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, password: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFirstname">
                  <Form.Control
                    type="text"
                    placeholder={userData.name.firstname}
                    value={dataUp.firstname}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, firstname: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastname">
                  <Form.Control
                    type="text"
                    placeholder={userData.name.lastname}
                    value={dataUp.lastname}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, lastname: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                  <Form.Control
                    type="text"
                    placeholder={userData.address.city}
                    value={dataUp.city}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, city: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicStreet">
                  <Form.Control
                    type="text"
                    placeholder={userData.address.street}
                    value={dataUp.street}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, street: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Control
                    type="number"
                    placeholder={userData.address.number}
                    value={dataUp.number}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, number: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicZipcode">
                  <Form.Control
                    type="text"
                    placeholder={userData.address.zipcode}
                    value={dataUp.zipcode}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, zipcode: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}"
                    placeholder={userData.phone}
                    value={dataUp.phone}
                    onChange={(e) =>
                      setDataUp({ ...dataUp, phone: e.target.value })
                    }
                  />
                  <Form.Text>Must use format 123-45-678-90</Form.Text>
                </Form.Group>
                <Button variant="dark" type="submit">
                  Update information
                </Button>
              </Form>
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
