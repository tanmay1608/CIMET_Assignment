import { createContext, useEffect, useState } from "react";
import { API_KEY, EXCHANGE_API } from "../utils/constants";
import axios from "axios";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState("AUD");
  const [currentCurrencyValue, setCurrentCurrencyValue] = useState(1);

  useEffect(() => {
    try {
      const fetchCurrencyData = async () => {
        const reponse = await axios.get(EXCHANGE_API, API_KEY);
        setCurrencyData(reponse.data.conversion_rates);
      };
      fetchCurrencyData();
    } catch (e) {
      setCurrencyData([{ AUD: 1 }, { INR: 57.85 }, { USD: 0.68 }]);
    }
  }, []);

  useEffect(() => {
    const cartItem = localStorage.getItem("cartItem");

    if (cartItem) {
      setCart(JSON.parse(cartItem));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }
  }, [cart]);

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
    const newValue = currencyData[currency];
    const preValue = currencyData[currentCurrency];

    setCurrentCurrency(currency);
    setCurrentCurrencyValue(newValue);

    setCart((prev) =>
      prev.map((cartElement) => ({
        ...cartElement,
        price: parseFloat(
          ((cartElement.price * newValue) / preValue).toFixed(2)
        ),
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
