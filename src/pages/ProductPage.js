import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <ProductDetails figure={id} />
    </div>
  );
};

export default ProductPage;
