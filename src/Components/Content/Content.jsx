import React from "react";
import "../Content/Content.css";

const Content = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__left">
          <h1 className="hero-1">
            <span>Order ahead</span>
            <br />
            and earn rewards for every purchase
            <span>.</span>
          </h1>
          <div className="btn__block">
            <a href="#" className="btn__hero">
              Discover now
            </a>
          </div>
        </div>
        <div className="hero__right">
          <img
            id="hero__image"
            src="https://tpass.co/static/home/images/couple-min.png"
            alt=""
            srcset=""
          />
          {/* <img id="hero__trees" src="./images/trees.svg" alt="" srcset="" /> */}
        </div>
      </section>
    </div>
  );
};

export default Content;
