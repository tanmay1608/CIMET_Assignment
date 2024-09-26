import { useLoaderData } from "react-router-dom";

const SingleMovie = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="bg-lightDarker w-full h-screen flex items-center justify-center">
    <div className="w-[80%] h-[80%] bg-red-400 overflow-hidden rounded-3xl relative">
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt="Movie backdrop"
      />
     
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 left-20">
      <p className="text-yellow text-[45px] font-bold  uppercase ">{data.original_title}</p>
      <div className="flex justify-start">
      {
        data.genres.map((genre)=> <p className=" p-2 m-1 text-gray-500 font-semibold" key={genre.id}>{genre.name}</p>)
      }
      </div>
    
      <p className="w-1/2 text-white text-md">{data.overview}</p>
      </div>
     
    </div>
  </div>
  
  );
};

export default SingleMovie;
