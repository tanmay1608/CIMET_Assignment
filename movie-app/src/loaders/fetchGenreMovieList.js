import axios from "axios";
import { API_OPTIONS } from "../utils/constants";

const fetchGenreMovieList = async () => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list",
    API_OPTIONS
  );

  console.log(data.data.genres);
  return data.data.genres;
};

export default fetchGenreMovieList;
