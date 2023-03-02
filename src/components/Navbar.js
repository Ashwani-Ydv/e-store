import React from "react";
import menu from "../assets/img/menu.png";
import search from "../assets/img/search.png";
import wishlist from "../assets/img/wishlist.png";
import cart from "../assets/img/cart.png";
import profile from "../assets/img/profile.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
        <div className="cart">
          <div>
            <img src={search} alt="search" />
          </div>
          <div>
            <img src={wishlist} alt="wishlist" />
          </div>

          <div className="cart-icon">
            <img src={cart} alt="cart" />
          </div>
          <div>
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
