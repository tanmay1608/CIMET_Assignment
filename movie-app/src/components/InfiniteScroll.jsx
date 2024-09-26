/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import MovieCard from "./MovieCard";



const InfiniteScroll = () => {
  const [movies, setMovies] = useState([]);
  const [page,setPage]=useState(1);


 console.log(movies.length);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=popularity.desc`,
        API_OPTIONS
      );

      setMovies((prev)=>[...prev,...data.data.results]);
    };

    fetchData();
  }, [page]);

  const handleInfiniteScroll= ()=>{
  if(window.innerHeight+document.documentElement.scrollTop+1 >=document.documentElement.scrollHeight ){
    setPage((prev)=> prev+1);
  }
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleInfiniteScroll);

    return ()=>{
      window.removeEventListener("scroll",handleInfiniteScroll);
    }
  },[])

  return <div className="flex flex-wrap px-52">
      {
        movies.map((movie)=> <MovieCard  key={movie.id} movie={movie}/>)
      }
  </div>;
};

export default InfiniteScroll;
