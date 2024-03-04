import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ height: "300px" }} className="container mt-5 w-100">
      <div className="footer-content d-flex justify-content-between">
        <div style={{ width: "400px" }} className="media">
          <h5 className="d-flex">
            <i className="fa-solid fa-utensils me-3"></i>Recipe Book
          </h5>
          <p>
          Where you tell the story of the dish, techniques you use, the lore of the ingredients—anything that reveals why you make this meal and why it would matter to you.
          </p>
          <p>Code Licensed RecipeBook, docs CC by 3.0</p>
          <p>Currently v3.1.2.</p>
        </div>
        <div className="links d-flex flex-column">
          <h5>LINKS</h5>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Landing Page
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
            Home Page
          </Link>
          
        </div>
        <div className="contact d-flex flex-column">
          <h5>CONTACT US</h5>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-1"
              placeholder="Email Id Please"
            />
            <button className="btn btn-info">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="https://twitter.com/?lang=en">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
