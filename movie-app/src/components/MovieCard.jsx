/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        className="w-44"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
    </div>
  );
};

export default MovieCard;
