import { useLoaderData } from "react-router-dom"
import TrendingMovies from "../components/TrendingMovies";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";

const Home = () => {
    const [popularMovies,topRatedMovies,trendingMovies]=useLoaderData();

  return (
    <div className="h-screen bg-lightDarker">
      <TrendingMovies trendingMovies={trendingMovies}/>
      <PopularMovies popularMovies={popularMovies}/>
      <TopRatedMovies topRatedMovies={topRatedMovies}/>
    </div>
  )
}

export default Home
