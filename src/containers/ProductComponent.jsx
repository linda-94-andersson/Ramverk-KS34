import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";

const ProductComponent = () => {
  const setShowButton = useRef(false);
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

  const products = useSelector((state) => state.allProducts.products);

  const {
    state: { cart },
    productState: { sort, searchQuery },
    cartDispatch,
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
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
      <section className="items" key={id}>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="item">
            <Card style={{ height: 550 }}>
              <Link to={`/product/${id}`}>
                <Card.Img className="product-img" src={image} alt={title} />
                <Card.Body>
                  <Card.Title>
                    <h2>{title}</h2>
                  </Card.Title>
                  <Card.Subtitle>
                    <h3>${price}</h3>
                    <h4>{category}</h4>
                  </Card.Subtitle>
                </Card.Body>
              </Link>
              <div className="btn-section">
                <Link to={`/product/${id}`}>
                  <Button>More</Button>
                </Link>
                {cart.some((p) => p.id === id) ? (
                  <Button
                    onClick={() => {
                      cartDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      });
                    }}
                    variant="danger"
                  >
                    Remove from cart
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      cartDispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      });
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>
            </Card>
          </div>
        )}
      </section>
    );
  });

  return (
    <>
      {renderList}
      <Button variant="dark" className="back-to-top" onClick={scrollToTop}>
        &#8679;
      </Button>
    </>
  );
};

export default ProductComponent;
