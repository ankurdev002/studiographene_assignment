import React, { useEffect, useState } from "react";
import blackstar from "../assets/blackstar.png";
import axios from "axios";
import "react-alice-carousel/lib/alice-carousel.css";
import nextBtn from "../assets/rightarrow.png";
import prevBtn from "../assets/leftarrow.png";
import navprod from "../assets/navprod.png";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  function fetchCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategory(response.data);
      setSelectedCategory(response.data[0])

      });
  }

  function fetchProducts() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }

  const filteredProducts = products.filter((product) => {
    return selectedCategory === null || product.category === selectedCategory;
  });

  return (
    <div className="product-sec">
      <div className="heading-product-sec">
        <h2>New Products</h2>
        <div className="heading-line-product">
          <img src={blackstar} />
          <hr />
        </div>
      </div>
      <div className="product-data">
        <div className="left-desc">
          {category.length > 0 &&
            category.map((cat) => (
              <button key={cat} onClick={() => handleCategoryClick(cat)} className={selectedCategory==cat?"select-cat":"default-select"}>
                {cat}
              </button>
            ))}
        </div>
        <div className="slider">
          <AliceCarousel
            disableDotsControls={true}
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate"
            renderPrevButton={() => {
              return <img src={prevBtn} className="prev-btn" />;
            }}
            renderNextButton={() => {
              return <img src={nextBtn} className="next-btn" />;
            }}
          >
            {filteredProducts.length > 0 &&
              filteredProducts.map((prod) => (
                <div className="item" data-value={prod.id} key={prod.id}>
                  <div className="product-image">
                    <img className="img" src={prod.image} />
                    <img className="navprod" src={navprod}/>
                  </div>
                  <div className="product-desc">
                    <div className="product-details">
                      <h3 className="prod-title">{prod.title}</h3>
                      <p className="prod-desc">{prod.description}</p>
                      <h4 className="prod-price">${prod.price}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
