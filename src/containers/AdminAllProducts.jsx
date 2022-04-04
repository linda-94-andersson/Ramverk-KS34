import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Form,
  Accordion,
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

  const handleSubmit = (productId) => {
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
      const { id, title, image, price, category, description } =
        data || product;
      return (
        <section key={id}>
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <Container>
              <Card style={{ paddingTop: 5, flexDirection: "row " }}>
                <Card.Img
                  style={{ height: 100, objectFit: "contain", width: "10%" }}
                  src={image}
                  alt={title}
                />
                <Card.Body style={{ display: "inline" }}>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(id);
                    }}
                  >
                    <Form.Group>
                      <Card.Title style={{ margin: 5 }}>
                        <Form.Control
                          type="text"
                          value={title}
                          onChange={(e) =>
                            handleUpdate(product, "title", e.target.value)
                          }
                        />
                      </Card.Title>
                      <Card.Subtitle style={{ margin: 5 }}>
                        <Form.Control
                          type="text"
                          value={price}
                          onChange={(e) =>
                            handleUpdate(product, "price", e.target.value)
                          }
                        />
                        <Form.Control
                          type="text"
                          value={category}
                          onChange={(e) =>
                            handleUpdate(product, "category", e.target.value)
                          }
                        />
                        <Form.Control
                          type="text"
                          value={description}
                          onChange={(e) =>
                            handleUpdate(product, "description", e.target.value)
                          }
                        />
                      </Card.Subtitle>
                    </Form.Group>
                    <Button variant="dark" style={{ margin: 5 }} type="submit">
                      UPDATE PRODUCT
                    </Button>
                    <Button
                      variant="dark"
                      style={{ margin: 5, display: "block" }}
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
        <Accordion.Item eventKey="products">
          <Accordion.Header>All products</Accordion.Header>
          <Accordion.Body>{renderProducts()}</Accordion.Body>
        </Accordion.Item>
      </Col>
    </Row>
  );
}

export default AdminAllProducts;
