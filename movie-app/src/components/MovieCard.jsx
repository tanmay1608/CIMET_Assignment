import { GENRES } from "../utils/constants";

/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
 

  const date = new Date(movie.release_date); // Create a Date object

  // Get year, month (0-11), and day
  const year = date.getFullYear();
  const monthIndex = date.getMonth(); // 0-11
  const day = date.getDate(); // 1-31

  // Array of abbreviated month names
  const monthsAbbreviated = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format the month to its abbreviated name
  const month = monthsAbbreviated[monthIndex]; // Get the abbreviated month name

  // Create the formatted date string
  const formattedDate = `${month} ${day}, ${year}`;

  const getGenreUsingId = (id) => {
    const genre = GENRES.find((genre) => genre.id === id);
    return genre ? genre.name : null;
  };

  const genres = movie.genre_ids
    .slice(0, 2)
    .map((genreId) => getGenreUsingId(genreId));

  return (
    <>
      <div className="m-2 rounded-xl w-44 flex flex-col items-center justify-between  overflow-hidden border-none relative ">
        <img
          className="w-full h-64 object-cover rounded-t-xl"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="text-lightDarker p-2 w-full bg-yellow">
          <p className="text-md font-bold truncate z-10 relative">
            {movie.title}
          </p>
          <p className="text-sm font-semibold truncate">{formattedDate}</p>
          {genres.map((genre, index) => (
            <p
              className="bg-dark bg-opacity-95 backdrop-blur-3xl text-yellow p-1 m-1  ml-0 text-center text-xs inline-block rounded-md "
              key={index}
            >
              {genre}
            </p>
          ))}
        </div>

        <div className="absolute bg-dark bg-opacity-30 backdrop-blur-2xl w-[45px] h-[45px] rounded-full -top-2 left-[138px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:shadow-lg hover:scale-110">
          <p className="text-white font-semibold">
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
