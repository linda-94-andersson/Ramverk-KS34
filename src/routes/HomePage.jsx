import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

function HomePage() {
  const products = useSelector((state) => state.allProducts.products);

  const {
    productState: { searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  const renderList = transformProducts().map((product) => {
    const { id, title, image, category } = product;
    return (
      <Carousel.Item key={id}>
        <Card.Img
          src={image}
          alt={title}
          style={{ maxHeight: 600, maxWidth: 700, objectFit: "contain" }}
        />
        <Carousel.Caption style={{ paddingBottom: 10 }}>
          <p className="featured-p">{title}</p>
          <p className="featured-p">{category}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div>
      <Card>
        <Card.Title style={{ textAlign: "center" }}>
          <h1>TUNG STORE</h1>
          <h2>Featured products</h2>
        </Card.Title>
        {[...Array(1)].map(() => (
          <div key={renderList}>
            <Carousel
              slide
              variant="dark"
              style={{ maxHeight: 600, maxWidth: 700 }}
            >
              {renderList}
            </Carousel>
          </div>
        ))}
        <Card.Body>
          <Link to="/products">
            <Button variant="dark">See all products</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
