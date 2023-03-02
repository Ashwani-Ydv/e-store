import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "react-use-cart";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Navbar />
      <CartProvider>
        <Body />
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
