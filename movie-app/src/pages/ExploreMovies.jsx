import { useState } from "react";
import InfiniteScroll from "../components/InfiniteScroll";

const ExploreMovies = () => {
  const [genre,setGenre]=useState("");
  const handleSelectChange=(e)=>{
    console.log(e.target.value);
      setGenre(e.target.value);
  }
  return (
    <div>
      <div className="flex justify-between px-52 py-4 ">
        <p>Explore Movies</p>
        <select defaultValue="Select genres" onChange={handleSelectChange}>
          <option  disabled >
            Select genres
          </option>
          <option>28</option>
          <option>12</option>
          <option>16</option>
        </select>
      </div>

      <InfiniteScroll handleSelectChange={handleSelectChange} genre={genre} />
    </div>
  );
};

export default ExploreMovies;
