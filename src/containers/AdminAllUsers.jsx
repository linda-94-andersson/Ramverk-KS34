import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row, Table, Accordion } from "react-bootstrap";
import { getAllUsers } from "../redux/actions/authActions";

function AdminAllUsers() {
  const allUsers = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const renderUsers = () => {
    if (!allUsers.length) return <div>Loading users...</div>;
    return allUsers.map((user) => {
      const { id, email, username, password, name } = user;
      return (
        <section key={id}>
          {Object.keys(user).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <Container>
              <Table responsive striped bordered>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>{id}</span>
                    </td>
                    <td>
                      <span>{email}</span>
                    </td>
                    <td>
                      <span>{username}</span>
                    </td>
                    <td>
                      <span>{password}</span>
                    </td>
                    <td>
                      <span>{name.firstname}</span>
                    </td>
                    <td>
                      <span>{name.lastname}</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          )}
        </section>
      );
    });
  };

  return (
    <Row>
      <Col>
        <Accordion.Item eventKey="users">
          <Accordion.Header>All users</Accordion.Header>
          <Accordion.Body>{renderUsers()}</Accordion.Body>
        </Accordion.Item>
      </Col>
    </Row>
  );
}

export default AdminAllUsers;
