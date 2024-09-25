import axios from "axios";
import { API_OPTIONS } from "../utils/constants";

const API_URLS = [
  "https://api.themoviedb.org/3/movie/popular",
  "https://api.themoviedb.org/3/movie/top_rated",
  "https://api.themoviedb.org/3/trending/movie/day",
];

export const fetchData = async () => {
  const arrayOfPromises = API_URLS.map((url) => axios.get(url, API_OPTIONS));
  const movieData = await Promise.allSettled(arrayOfPromises);
  return movieData;
};
