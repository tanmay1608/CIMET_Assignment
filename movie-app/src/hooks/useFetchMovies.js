import axios from "axios";
import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";



const useFetchMovies = (endPoint, genreId, handleParamChange) => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [filteredList, setFilteredList] = useState([]);
    const [enableInfiniteScroll, setEnableInfiniteScroll] = useState(true);
    const [visitedPages, setVisitedPages] = useState(new Set());

    useEffect(() => {
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
          setLoading(true);
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


      const debouncing = (fun, delay) => {
        let timer;
      
        return () => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            fun();
          }, delay);
        };
      };

     
      

      const handleInfiniteScroll = () => {
        console.log("inside handleInfiniteScroll")
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
       else{
        console.log(window.innerHeight + document.documentElement.scrollTop + 1,document.documentElement.scrollTop);
       }
     };

     const debouncedScroll = debouncing(handleInfiniteScroll, 500);
   
     useEffect(() => {
   
      // window.addEventListener("scroll", handleInfiniteScroll);
       if (enableInfiniteScroll) {
         window.addEventListener("scroll", debouncedScroll);
       } else {
         window.removeEventListener("scroll", debouncedScroll);
       }
   
       return () => {
         window.removeEventListener("scroll",debouncedScroll);
       };
     }, [enableInfiniteScroll]);
   

     return {
        movies,
        filteredList,
        loading,
        setFilteredList,
        enableInfiniteScroll,
        setEnableInfiniteScroll,
      };

 
}

export default useFetchMovies;


