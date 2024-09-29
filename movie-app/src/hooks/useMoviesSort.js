
import {useEffect} from "react"
import {
    filterByTitle,
    filterByPopularityAsc,
    filterByPopularityDes,
    filterByRatingDes,
    filterByRatingAsc
} from "../utils/sortingUtilityFunctions";

const useMoviesSort = (movies, sortBy, setFilteredList, setEnableInfiniteScroll) => {
   
    
      useEffect(() => {
    
        let sortedMovies = [];
        
        if (sortBy!== "Sort By") {
          setEnableInfiniteScroll(false);
        } else {
          setEnableInfiniteScroll(true);
        }
    
        switch (sortBy) {
          case "Title A-Z":
           sortedMovies= filterByTitle(movies);
            break;
          case "Popularity Asc":
            sortedMovies=filterByPopularityAsc(movies);
            break;
          case "Popularity Desc":
            sortedMovies=filterByPopularityDes(movies);
            break;
          case "Rating Desc":
            sortedMovies=filterByRatingDes(movies);
            break;
          case "Rating Asc":
            sortedMovies=filterByRatingAsc(movies);
            break;
          default:
            break;
        }
        setFilteredList(sortedMovies);
      }, [sortBy]);


}

export default useMoviesSort;


