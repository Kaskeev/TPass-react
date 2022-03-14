import React from "react";
import "./Section.css";
import ProductCard from "../ProductCard/ProductCard";

const Section = (props) => {
  let { products } = props;
  return (
    <div>
      <div className="products">
        {products.map((item) => {
          return <ProductCard products={item} key={item.id} />;
        })}
      </div>
      <section className="main">
        <div className="main__full">
          <img
            src="https://tpass.co/static/home/images/02deatured-min.png"
            alt=""
            className="main__img"
          />
          <div className="main__right">
            <h3 className="main__right-1">Your daily pick-me-up</h3>
            <h2 className="main__right-2">
              How does
              <br />
              it work.
            </h2>
            <h4 className="main__right-3">
              Start choosing your favorite teas and snacks in your nearby stores
              and place your orders, accumulate points, share gifts and teas
              with your friends and co-workers, and finally use our T-Pass to
              get your free drinks.
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
