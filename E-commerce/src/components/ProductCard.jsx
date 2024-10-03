import { useContext, useEffect, useState } from "react";
import CustomButtons from "./customButtons";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);

  const isProductPresent = cart.find((cartProduct) => cartProduct.id === product.id);

  return (
    <div className="flex flex-col items-center bg-white w-64 px-4 m-8 shadow-2xl rounded-2xl">
      <Link to={`/products/${product.id}`} className="flex-grow">
        <img
          src={product.image}
          className="w-52 object-cover"
          alt={product.title}
        />
        <p className="inter-bold text-center p-4">{product.title}</p>
      </Link>

      {!isProductPresent ? (
        <button
          className="bg-yellow-500 text-dark-gray py-2 px-4 inter-regular rounded-lg shadow-lg cursor-pointer hover:scale-105  transition-all duration-200 ease-in-out mt-auto  mb-5"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      ) : (
        <CustomButtons product={isProductPresent} />
      )}
    </div>
  );
};

export default ProductCard;
