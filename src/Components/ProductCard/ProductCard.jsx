import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  let { products } = props;
  return (
    <div>
      <section className="content">
        <div className="content__wrap">
          <img src={products.image} alt="Logo" />
          <h2 className="content-title">{products.title}</h2>
          <h6 className="content-title-2">{products.text}</h6>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
