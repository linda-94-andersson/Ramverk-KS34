import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Form,
  Dropdown,
} from "react-bootstrap";
import { deleteProd, updateProductData } from "../redux/actions/productActions";
import { replaceItemAtIndex, removeItemAtIndex } from "../utils";

function AdminAllProducts() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [prodData, setProdData] = useState([]);

  const handleUpdate = (product, key, value) => {
    const i = prodData.findIndex((prod) => {
      return prod.id === product.id;
    });
    if (i < 0) {
      setProdData([...prodData, { ...product, [key]: value }]);
      return;
    }
    setProdData(
      replaceItemAtIndex(prodData, i, { ...prodData[i], [key]: value })
    );
  };

  const handleSubmit = (e, productId) => {
    e.preventDefault();
    const i = prodData.findIndex((prod) => prod.id === productId);
    if (i < 0) {
      return;
    }
    dispatch(updateProductData(prodData[i]));
    setProdData(removeItemAtIndex(prodData, i));
  };

  const handleDel = (id) => {
    dispatch(deleteProd(id));
  };

  const renderProducts = () => {
    if (!products.length) return <div>Loading products...</div>;
    return products.map((product) => {
      const data = prodData.find((prod) => {
        return prod.id === product.id;
      });
      const { id, title, image, price, category } = data || product;
      return (
        <section key={id}>
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <Container style={{ width: "58.3vw" }}>
              <Card style={{ paddingTop: 5 }}>
                <Card.Img
                  style={{ height: 100, objectFit: "contain" }}
                  src={image}
                  alt={title}
                />
                <Card.Body style={{ display: "inline" }}>
                  <Form onSubmit={(e) => handleSubmit(e, id)}>
                    <Form.Group>
                      <Card.Title style={{ margin: 5 }}>
                        <Form.Control
                          style={{ width: "40vw" }}
                          type="text"
                          value={title}
                          onChange={(e) =>
                            handleUpdate(product, "title", e.target.value)
                          }
                        />
                      </Card.Title>
                      <Card.Subtitle style={{ margin: 5 }}>
                        <Form.Control
                          style={{ width: "40vw" }}
                          type="text"
                          value={price}
                          onChange={(e) =>
                            handleUpdate(product, "price", e.target.value)
                          }
                        />
                        <Form.Control
                          style={{ width: "40vw" }}
                          type="text"
                          value={category}
                          onChange={(e) =>
                            handleUpdate(product, "category", e.target.value)
                          }
                        />
                      </Card.Subtitle>
                    </Form.Group>
                    <Button variant="dark" style={{ margin: 5 }} type="submit">
                      UPDATE PRODUCT
                    </Button>
                    <Button
                      variant="dark"
                      style={{ margin: 5 }}
                      type="button"
                      onClick={() => handleDel(id)}
                    >
                      DELETE PRODUCT!
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Container>
          )}
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
            All products
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>{renderProducts()}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default AdminAllProducts;
