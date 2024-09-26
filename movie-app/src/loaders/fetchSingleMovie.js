import axios from "axios";
import { API_OPTIONS } from "../utils/constants";

export const fetchSingleMovie = async (eventId) => {
  const id = eventId.params.movieId;
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}`,
    API_OPTIONS
  );
  
  return data.data;
};
