import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CustomButtons = ({ product }) => {
  const { updateProductQuantity, removeProductFromCart } = useContext(CartContext);
  
  return (
    <div className="flex flex-col items-center mt-auto pb-4">
      <div className="flex justify-center items-center">
        <button
          className="p-2 inter-bold text-2xl flex justify-center items-center w-[30px] h-[30px] bg-white border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white shadow-lg"
          disabled={product.quantity === 1}
          onClick={() => updateProductQuantity(product.id, -1)}
        >
          -
        </button>
        <div className="flex justify-center items-center border border-dark-gray px-5 mx-2">
          <p className="p-1 inter-medium">{product.quantity}</p>
        </div>
        <button
          className="p-2 inter-bold text-2xl flex justify-center items-center w-[30px] h-[30px] bg-white border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white shadow-lg"
          onClick={() => updateProductQuantity(product.id, 1)}
        >
          +
        </button>
      </div>

     
      <button
        className="bg-red-500 text-white py-1 px-2 inter-regular rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out mt-2"
        onClick={() => removeProductFromCart(product.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CustomButtons;
