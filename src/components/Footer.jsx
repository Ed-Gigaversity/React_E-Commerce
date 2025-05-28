import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p className="small">
              Your trusted destination for quality products and exceptional shopping experience.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <div className="small">
              <p className="mb-1">Email: info@shop.com</p>
              <p className="mb-1">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-light me-3" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="small mb-0">
              © {new Date().getFullYear()} Your Shop Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
