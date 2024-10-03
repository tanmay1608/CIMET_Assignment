import { createContext, useEffect, useState } from "react";
import { API_KEY, EXCHANGE_API } from "../utils/constants";
import axios from "axios";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState("AUD");
  const [currentCurrencyValue, setCurrentCurrencyValue] = useState(1);
  const [previousCurrencyValue, setPreviousCurrencyValue] = useState(1); 

  useEffect(() => {
    try {
      const fetchCurrencyData = async () => {
        const reponse = await axios.get(EXCHANGE_API, API_KEY);
        setCurrencyData(reponse.data.conversion_rates);
      };
      fetchCurrencyData();
    } catch (e) {
      setCurrencyData([]);
    }
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const updateProductQuantity = (productId, value) => {
    setCart((prev) =>
      prev.map((cartProduct) =>
        cartProduct.id === productId
          ? { ...cartProduct, quantity: cartProduct.quantity + value }
          : cartProduct
      )
    );
  };

  const removeProductFromCart = (productId) => {
    setCart((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId)
    );
  };

  const handleConverisonOption = (currency) => {
   
  // Get the conversion values
  const newValue = currencyData[currency]; // Rate for the new currency
  const preValue = currencyData[currentCurrency]; // Rate for the current currency

  // Update the previous currency and value before changing the current one
  
  setPreviousCurrencyValue(preValue);

  // Set the new current currency and its value
  setCurrentCurrency(currency);
  setCurrentCurrencyValue(newValue);

  // Update the prices in the cart
  setCart((prev) =>
    prev.map((cartElement) => ({
      ...cartElement,
      price: parseFloat(((cartElement.price * newValue) / preValue).toFixed(2)), // Convert and round to 2 decimal places
    }))
  );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateProductQuantity,
        removeProductFromCart,
        currencyData,
        handleConverisonOption,
        currentCurrency,
        currentCurrencyValue,
        previousCurrencyValue
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
