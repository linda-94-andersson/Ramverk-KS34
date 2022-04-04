import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row, Accordion, Table } from "react-bootstrap";
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
          <Container>
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
        <Accordion.Item eventKey="carts">
          <Accordion.Header>All carts</Accordion.Header>
          <Accordion.Body>{renderCarts()}</Accordion.Body>
        </Accordion.Item>
      </Col>
    </Row>
  );
}

export default AdminAllCarts;
