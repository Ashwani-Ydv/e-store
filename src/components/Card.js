import React from "react";
import { useCart } from "react-use-cart";
import "./Card.css";

function Card(props) {
  const { addItem } = useCart();
  // const handleAddToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };

  return (
    <div className="col-11 col-md-6 col-lg-2 mx=10 mb-4 mt-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top img-fluid" />
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-tex">&#8377;{props.price}</p>
          <div className="size">
            {props.size.map((item) => {
              return <button className="size-btn">{item}</button>;
            })}
          </div>
          <div className="cart-btn">
            <button class="btn btn-warning" onClick={() => addItem(props.item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
