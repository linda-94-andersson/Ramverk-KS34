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
          <Container style={{ width: "68.3vw" }}>
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Date</th>
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
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>ProductId</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products.map(({ productId, quantity }) => {
                  return (
                    <tr key={`cart-${id}-${productId}`}>
                      <td>
                        <span style={{ marginRight: 100 }}>{productId}</span>
                      </td>
                      <td>
                        <span>{quantity}</span>
                      </td>
                    </tr>
                  );
                })}
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
        <Dropdown
          id="dropdown-basic"
          autoClose={false}
          style={{ cursor: "default" }}
        >
          <Dropdown.Toggle
            variant="secondary"
            style={{ width: "70vw", marginBottom: 10 }}
          >
            All carts
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item style={{ cursor: "default" }}>
              {renderCarts()}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default AdminAllCarts;
