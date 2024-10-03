import axios from "axios";

export const fetchSingleProductData = async (params, url) => {
  const response = await axios.get(`${url}/${params.productId}`);
  return response.data;
};
