import React from "react";
import "./App.css"
import Navbar from "./components/navbar"
import Categories from "./components/categories"
import Products from "./components/products"
import Footer from "./components/footer"

function App() {
  return (
    <>
    <Navbar/>
      <img
        src="https://images.olx.com.pk/thumbnails/536795891-800x600.webp"
        id="img1_ad"
        width="100%"
        alt="ad"
      />

    <Categories/>
    <Products/>
    <Footer/>
    </>
  );
}

export default App