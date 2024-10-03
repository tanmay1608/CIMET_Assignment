import axios from "axios";

export const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
