//import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product.js";

const api = "https://fakestoreapi.com/products";

const { data: products } = await axios.get(api);

const ProductsList = () => {
  console.log(products);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem" }}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
