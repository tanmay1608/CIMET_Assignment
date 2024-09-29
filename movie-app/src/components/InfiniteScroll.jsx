/* eslint-disable react/prop-types */

import MovieCard from "./MovieCard";
import useMovieSort from "../hooks/useMoviesSort";
import useFetchMovies from "../hooks/useFetchMovies";
import Shimmer from "./Shimmer";

const InfiniteScroll = ({ endPoint, genreId, sortBy, handleParamChange }) => {
  const {
    movies,
    filteredList,
    loading,
    setFilteredList,
    setEnableInfiniteScroll,
  } = useFetchMovies(endPoint, genreId, handleParamChange);

  useMovieSort(movies, sortBy, setFilteredList, setEnableInfiniteScroll);

  return (
    <div>
      <div className="flex flex-wrap px-52">
        {filteredList.map((movie) => (
          <MovieCard
            key={
              movie.id +
              `${Date.now()}-${Math.random()*10000}`
            }
            movie={movie}
            route={endPoint}
          />
        ))}

        {loading && <Shimmer />}
      </div>
    </div>
  );
};

export default InfiniteScroll;
