import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Carousel } from "react-bootstrap";
import { fetchProducts } from "../redux/actions/productActions";
import { CartState } from "../redux/context/Context";

function HomePage() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const {
    filterState: { searchQuery },
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
          style={{ height: 600, maxWidth: 700, objectFit: "contain" }}
        />
        <Carousel.Caption style={{ paddingBottom: 10 }}>
          <p
            style={{
              color: "white",
              textShadow: "1px 1px #030303",
              backgroundColor: "#343a405d",
              borderRadius: 5,
            }}
          >
            {title}
          </p>
          <p
            style={{
              color: "white",
              textShadow: "1px 1px #030303",
              backgroundColor: "#343a405d",
              borderRadius: 5,
            }}
          >
            {category}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <>
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
    </>
  );
}

export default HomePage;
