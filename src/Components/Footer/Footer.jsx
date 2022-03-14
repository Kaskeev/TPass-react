import React from "react";
import "./Footer.css";

const Footer = ({ logo }) => {
  return (
    <div>
      <footer className="footer">
        <div className="container footer__block">
          <a href="#" className="logo__footer">
            <img src={logo} alt="" className="footer__img" />
          </a>
          <div className="footer__about">
            <div className="footer__block-1">
              <h1 className="footer__title">Company</h1>
              <a href="#" className="footer__link">
                Merchant Portal
              </a>
            </div>
            <div className="footer__block-1">
              <h1 className="footer__title">Support</h1>
              <a href="#" className="footer__link">
                FAQ
              </a>
              <a href="#" className="footer__link">
                Terms of Service{" "}
              </a>
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
            </div>
            <div className="footer__block-1">
              <h1 className="footer__title">Follow Us</h1>
              <a href="#" className="footer__link">
                Twitter
              </a>
              <a href="#" className="footer__link">
                Instagram
              </a>
              <a href="#" className="footer__link">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
