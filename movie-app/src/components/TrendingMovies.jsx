/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
const TrendingMovies = ({ trendingMovies }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="px-52">
       <div className="p-10">
      <Slider {...settings}>
        {trendingMovies.value.data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
    </div>
   
  );
};

export default TrendingMovies;
