import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { CartState } from "../redux/context/Context";
import { ActionTypes } from "../redux/constans/action-types";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const setShowButton = useRef(false);

  const {
    state: { cart },
    filterState: { sort, searchQuery, sortByCATE },
    cartDispatch,
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = [...products];
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (sortByCATE.length > 0) {
      sortedProducts = sortedProducts.filter((product) =>
        sortByCATE.includes(product.category)
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  const renderList = transformProducts().map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <section key={id}>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <Container
            style={{
              backgroundColor: "rgba(226,224,228,0.322)",
              maxWidth: 200,
              height: "94%",
              border: "1px soild rgba(0,0,0,0.164)",
              borderRadius: 5,
              overflow: "hidden",
              padding: 10,
              margin: "20px 0px",
            }}
          >
            <Card style={{ height: 650 }}>
              <Link to={`/product/${id}`}>
                <Card.Img
                  style={{
                    width: "100%",
                    height: "25vh",
                    display: "block",
                    objectFit: "contain",
                    paddingRight: 25,
                  }}
                  src={image}
                  alt={title}
                />
                <Card.Body style={{ width: 200 }}>
                  <Card.Title>
                    <h2
                      style={{ margin: "10px 0px", fontSize: 19, height: 171 }}
                    >
                      {title}
                    </h2>
                  </Card.Title>
                  <Card.Subtitle>
                    <h3
                      style={{
                        margin: "10px 0px",
                        padding: "10px 0px",
                        fontSize: 28,
                      }}
                    >
                      ${price}
                    </h3>
                    <h4 style={{ fontSize: 20 }}>{category}</h4>
                  </Card.Subtitle>
                </Card.Body>
              </Link>
              <div
                style={{
                  position: "absolute",
                  bottom: 5,
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Link to={`/product/${id}`}>
                  <Button
                    variant="dark"
                    style={{
                      fontSize: 18,
                      borderRadius: 5,
                      width: 150,
                      height: 40,
                      textTransform: "capitalize",
                      margin: "5px auto",
                    }}
                  >
                    More
                  </Button>
                </Link>
                {cart.some((p) => p.id === id) ? (
                  <Button
                    style={{
                      fontSize: 18,
                      borderRadius: 5,
                      width: 150,
                      height: 40,
                      textTransform: "capitalize",
                      margin: "5px auto",
                    }}
                    onClick={() => {
                      cartDispatch({
                        type: ActionTypes.REMOVE_FROM_CART,
                        payload: product,
                      });
                    }}
                    variant="danger"
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    variant="dark"
                    style={{
                      fontSize: 18,
                      borderRadius: 5,
                      width: 150,
                      height: 40,
                      textTransform: "capitalize",
                      margin: "5px auto",
                    }}
                    onClick={() => {
                      cartDispatch({
                        type: ActionTypes.ADD_TO_CART,
                        payload: product,
                      });
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>
            </Card>
          </Container>
        )}
      </section>
    );
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton.current = true;
      } else {
        setShowButton.current = false;
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {renderList}
      <Button
        variant="dark"
        style={{ position: "fixed", bottom: 20, right: 20 }}
        onClick={scrollToTop}
      >
        &#8679;
      </Button>
    </>
  );
};

export default ProductComponent;
