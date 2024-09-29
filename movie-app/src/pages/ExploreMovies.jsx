import { useState } from "react";
import InfiniteScroll from "../components/InfiniteScroll";
import { useLoaderData } from "react-router-dom";
import ExploreHeader from "../components/ExploreHeader";
import { PageContext } from "../utils/pageContext";

const ExploreMovies = () => {
  const data = useLoaderData();
  const [genre, setGenre] = useState("");
  const [isSelected, setIsSelected] = useState(null);
  const [sortBy, setSortBy] = useState("Sort By");
  

  const handleSelectChange = (e) => {
   console.log(e.target.value);
    setGenre(e.target.value);
  };

  const handleParamChange=(e)=>{
   
    if(e === null){
      console.log("inside handler");
      setSortBy("Sort By");
      return;
    }
    console.log(e.target.value)
    setSortBy(e.target.value);
  }
  return (
    <div>
      <ExploreHeader genreList={data} genre={genre} sortBy={sortBy} handleSelectChange={handleSelectChange} handleParamChange={handleParamChange}/>
      
      
      <InfiniteScroll
        endPoint={"movie"}
        genreId={genre}
        isSelected={isSelected}
        sortBy={sortBy}
       handleParamChange={handleParamChange}
      />
     
      
    </div>
  );
};

export default ExploreMovies;
