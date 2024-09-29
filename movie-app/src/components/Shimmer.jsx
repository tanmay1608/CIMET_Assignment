import ShimmerMovieCard from "./ShimmerMovieCard";

const Shimmer = () => {
  const arr = new Array(5).fill(0);
  return (
    <div className="bg-lightDarker flex flex-col items-center ">
      <div className="bg-lightDarker flex flex-wrap justify-center">
        {arr.map((item, index) => (
          <ShimmerMovieCard key={`row-1: ${index}`} />
        ))}
      </div>

      <div className="bg-lightDarker flex flex-wrap justify-center">
        {arr.map((item, index) => (
          <ShimmerMovieCard key={`row-2: ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
