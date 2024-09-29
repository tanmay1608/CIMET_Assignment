/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect ,useContext} from "react";
import { API_OPTIONS } from "../utils/constants";
import MovieCard from "./MovieCard";
import { PageContext } from "../utils/pageContext";


const InfiniteScroll = ({ endPoint, genreId,  sortBy, handleParamChange }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState([]);
  const [enableInfiniteScroll, setEnableInfiniteScroll] = useState(true);
  const [visitedPages, setVisitedPages] = useState(new Set());
  

 // console.log(enableInfiniteScroll,"check");

  const filterByTitle = () => {
    const updatedList = movies.sort((a, b) => {
      if (a.title) {
        return a.title - b.title;
      } else {
        return a.name - b.name;
      }
    });
    console.log(updatedList);
    setFilteredList(updatedList);
  };

  const filterByPopularityAsc = () => {
    const updatedList = movies.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    console.log(updatedList);
    setFilteredList(updatedList);
  };
  const filterByPopularityDes = () => {

    const updatedList = movies.sort((a, b) => {
      return b.popularity-a.popularity  ;
    });

    setFilteredList(updatedList);
  };

  const filterByRatingDes = () => {

    console.log("inside Des")
    const updatedList = [...movies].sort((a, b) => {
      return b.vote_average - a.vote_average ;
    });

    setFilteredList(updatedList);
  };

  const filterByRatingAsc = () => {
    console.log("inside")

    const updatedList = [...movies].sort((a, b) => {
      //console.log(a.vote_average>b.vote_average);
      return a.vote_average - b.vote_average;
    });

    console.log(updatedList);
    setFilteredList(updatedList);
  };

  useEffect(() => {

    console.log("inside useEffect",enableInfiniteScroll,sortBy);
    if (sortBy!== "Sort By") {
      setEnableInfiniteScroll(false);
    } else {
      setEnableInfiniteScroll(true);
    }

    switch (sortBy) {
      case "Title A-Z":
        filterByTitle();
        break;
      case "Popularity Asc":
        filterByPopularityAsc();
        break;
      case "Popularity Des":
        filterByPopularityDes();
        break;
      case "Rating Desc":
        filterByRatingDes();
        break;
      case "Rating Asc":
        filterByRatingAsc();
        break;
      default:
        break;
    }
  }, [sortBy]);

 

  useEffect(() => {
    console.log("first");
    setMovies([]);
    setFilteredList([]);
    setPage(1);
    setEnableInfiniteScroll(true);
    handleParamChange(null);
    setVisitedPages(() => new Set());
  }, [genreId]);

  useEffect(() => {
    console.log("secoond", page, enableInfiniteScroll);

    
    if (visitedPages.has(page) && page !== 1) {
     
      return; // Do not fetch the page if it has been visited
    }

   

    const fetchData = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/discover/${endPoint}?page=${page}${
          genreId !== "" ? `&with_genres=${genreId}`
        :''}`,
        API_OPTIONS
      );

      setMovies((prev) =>
        page === 1 ? data.data.results : [...prev, ...data.data.results]
      );
      setFilteredList((prev) =>
        page === 1 ? data.data.results : [...prev, ...data.data.results]
      );
      setVisitedPages((prev) => new Set(prev).add(page));
      setLoading(false);
    };

    fetchData();
  }, [genreId,page]);

 

  const handleInfiniteScroll = () => {
     //window.innerHeight is device's viewport
    //document.documentElement.scrollTop is the value which tells , how much the document scrolled from the top at top it is 0
    //document.documentElement.ScrollHeight is the total height of the document including the content which is not visible due to scrolling
   
    if (!enableInfiniteScroll) {
     
      return ;
    }

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight 
    ) {
      setPage((prev) => prev + 1);
      setLoading(true);
    }
  };

  useEffect(() => {

   // window.addEventListener("scroll", handleInfiniteScroll);
    if (enableInfiniteScroll) {
      window.addEventListener("scroll", handleInfiniteScroll);
    } else {
      window.removeEventListener("scroll", handleInfiniteScroll);
    }

    return () => {
      window.removeEventListener("scroll",handleInfiniteScroll);
    };
  }, [enableInfiniteScroll]);

  return (
    <div>
      <div className="flex flex-wrap px-52">
        {filteredList.map((movie) => (
          <MovieCard key={movie.id+`${Date.now()}-${Math.random().toString(36).substr(2, 9)}`} movie={movie} route={endPoint} />
        ))}
      </div>
      ;
      {loading && (
        <div className="w-full flex justify-center items-center">
          <h1 className=" text-black text-3xl flex justify-center">
            Loading......
          </h1>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
