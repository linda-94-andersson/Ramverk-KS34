import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row, Dropdown, Table } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { getCarts } from "../redux/actions/productActions";

function AdminAllCarts() {
  const allUsers = useSelector((state) => state.allUsers.users);
  const getAllCarts = useSelector((state) => state.allCarts.getCarts);
  const auth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarts());
  }, []);

  const renderCarts = () => {
    if (!getAllCarts.length) return <div>Loading carts...</div>;
    return getAllCarts.map((cart) => {
      const { id, userId, date, products } = cart;
      const user = allUsers.find((user) => user.id === userId);
      return (
        <section key={id}>
          <Container style={{ width: "58.3vw" }}>
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>ProductId &amp; Quantity </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{id}</td>
                  <td>
                    <span>{!user ? userId : user.username}</span>
                  </td>
                  <td>
                    <span>{date}</span>
                  </td>
                  {products.map(({ productId, quantity }) => {
                    return (
                      <div key={`cart-${id}-${productId}`}>
                        <td>
                          <span style={{ marginRight: 100 }}>{productId}</span>
                        </td>
                        <td>
                          <span>{quantity}</span>
                        </td>
                      </div>
                    );
                  })}
                </tr>
              </tbody>
            </Table>
          </Container>
        </section>
      );
    });
  };

  return (
    <Row>
      <Col>
        <Dropdown id="dropdown-basic" autoClose={false}>
          <Dropdown.Toggle
            variant="secondary"
            style={{ width: "60vw", marginBottom: 10 }}
          >
            All carts
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>{renderCarts()}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default AdminAllCarts;
