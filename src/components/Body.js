import React from "react";
import Card from "./Card";
import { storeProducts } from "./data";
import Cart from "./Cart";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";
import Ellipse1 from "../assets/img/Ellipse1.png";
import Ellipse2 from "../assets/img/Ellipse2.png";
import Ellipse3 from "../assets/img/Ellipse3.png";
import Ellipse4 from "../assets/img/Ellipse4.png";
import Ellipse5 from "../assets/img/Ellipse5.png";
import Ellipse6 from "../assets/img/Ellipse6.png";

import "../App.css";
function Body() {
  const data = storeProducts;
  return (
    <div>
      <div className="banner-container">
        <img className="banner" src={banner1} alt="banner" />
      </div>
      <div className="ellipse-Container">
        <img className="ellipse" src={Ellipse1} alt="ellipse" />
        <img className="ellipse" src={Ellipse2} alt="ellipse" />
        <img className="ellipse" src={Ellipse3} alt="ellipse" />
        <img className="ellipse" src={Ellipse4} alt="ellipse" />
        <img className="ellipse" src={Ellipse5} alt="ellipse" />
        <img className="ellipse" src={Ellipse6} alt="ellipse" />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "bold",
          fontfamily: "Playfair Display",
        }}
      >
        <p>Trending T-Shirts</p>
      </div>
      <div className="card-container">
        {data.map((item) => {
          return (
            <Card
              img={item.img}
              title={item.title}
              price={item.price}
              size={item.size}
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
      <Cart />
      <div className="card-container">
        {data.map((item) => {
          return (
            <Card
              img={item.img}
              title={item.title}
              price={item.price}
              size={item.size}
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "bold",
          fontfamily: "Playfair Display",
        }}
      >
        <p>Featured Products</p>
      </div>
      <div className="card-container">
        {data.map((item) => {
          return (
            <Card
              img={item.img}
              title={item.title}
              price={item.price}
              size={item.size}
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
      <div className="banner-container">
        <img className="banner" src={banner2} alt="banner" />
      </div>
      <div className="banner-container">
        <img className="banner" src={banner3} alt="banner" />
      </div>
    </div>
  );
}

export default Body;
