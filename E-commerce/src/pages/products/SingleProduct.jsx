import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CustomButtons from "../../components/customButtons";

const SingleProduct = () => {
  const productDetails = useLoaderData();
  const { cart, addToCart,currentCurrency,currentCurrencyValue } = useContext(CartContext);


 
  const isProductPresent = cart.find((cartProduct) => cartProduct.id === productDetails.id);

  return (
    <div className="flex justify-center items-center h-screen ">
       <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-2xl w-5/6">
      <img src={productDetails.image} className="w-64 object-cover" alt={productDetails.title} />
      <h1 className="inter-bold text-2xl mt-4">{productDetails.title}</h1>
      <p className="text-gray-700 mt-2 w-1/2">{productDetails.description}</p>
      <p className="text-xl font-bold mt-2">{currentCurrency !== "AUD" ? currentCurrency+" "+(productDetails.price*currentCurrencyValue).toFixed(2) : currentCurrency+" "+productDetails.price}</p>

      
      {!isProductPresent ? (
        <button
          className="bg-yellow-500 text-dark-gray py-2 px-4 inter-regular rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out mt-auto mb-5"
          onClick={() => addToCart(productDetails)}
        >
          Add To Cart
        </button>
      ) : (
        <CustomButtons product={isProductPresent} />
      )}
    </div>
    </div>
   
  );
};

export default SingleProduct;
