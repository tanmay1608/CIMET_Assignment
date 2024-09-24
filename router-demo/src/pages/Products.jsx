import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

const Products = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState([]);
  console.log('inside')

  useEffect(() => {
    const fetchData = async () => {
      //axios automatically parses teh JSON response so no need od data.json
      const productsResponse = await axios.get("https://fakestoreapi.com/products");
      setProductList(productsResponse.data);
    };

    fetchData();
  }, []);



  return productList.length === 0 ?(<div className="w-full h-screen bg-black flex justify-center items-center"><h1 className="text-white text-3xl">Loading.....</h1></div>) :<ProductList productList={productList}/>;
};

export default Products;
