import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MoviesWrapper from "../components/MoviesWrapper";
import ExploreMovies from "../pages/ExploreMovies";
import SingleMovie from "../pages/SingleMovie";
import ShowsWrapper from "../components/ShowsWrapper";
import ExploreShows from "../pages/ExploreShows";
import SingleShow from "../pages/SingleShow";
import {fetchData} from "../loaders/fetchData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchData
      },
      {
        path: "/movies",
        element: <MoviesWrapper />,
        children: [
          {
            index: true,
            element: <ExploreMovies />,
          },
          {
            path: ":movieId",
            element: <SingleMovie />,
          },
        ],
      },
      {
        path: "/tv",
        element: <ShowsWrapper />,
        children: [
          {
            index: true,
            element: <ExploreShows />,
          },
          {
            path: ":showId",
            element: <SingleShow />,
          },
        ],
      },
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
