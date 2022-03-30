import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { url } from "../apis/fakeStoreApi";
import { ActionTypes } from "../redux/constans/action-types";

function ProfilePage() {
  const sign = useSelector((state) => state.signInOut);
  const userData = useSelector((state) => state.userData);
  console.log(sign, " Sign");
  console.log(userData, " uderData");

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = (dispatch) => {
      axios
        .get(`${url}/users/${sign.token.userId}`)
        .then((userData) => {
          localStorage.setItem("user", JSON.stringify(userData.data));
          dispatch({
            type: ActionTypes.GET_USERDATA,
            userData: userData.data,
          });
        })
        .catch((error) => {
          console.log(error.response, " error fetchData");
        });
      setData(userData.data);
    };

    fetchData();
  }, [sign.token.userId]);

  return (
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
          <ListGroup style={{ display: "block" }}>
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
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
