import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductsWrapper from "../pages/products/ProductsWrapper";
import Products from "../pages/products/Products";
import SingleProduct from "../pages/products/SingleProduct";
import BlogsWrapper from "../pages/blogs/BlogsWrapper";
import Blogs from "../pages/blogs/Blogs";
import SingleBlog from "../pages/blogs/SingleBlog";
import Cart from "../pages/Cart";
import { fetchData } from "../loaders/fetchData";
import { BLOGS_API, LIMIT, PRODUCTS_API } from "../utils/constants";
import { fetchSingleProductData } from "../loaders/fetchSingleProductData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchData(PRODUCTS_API + LIMIT),
      },
      {
        path: "/products",
        element: <ProductsWrapper />,
        children: [
          {
            index: true,
            element: <Products />,
            loader: () => fetchData(PRODUCTS_API),
          },
          {
            path: ":productId",
            element: <SingleProduct />,
            loader: ({params}) => fetchSingleProductData(params, PRODUCTS_API),
          },
        ],
      },
      {
        path: "/blogs",
        element: <BlogsWrapper />,
        children: [
          {
            index: true,
            element: <Blogs />,
            loader:()=> fetchData(BLOGS_API)
            
          },
          {
            path: ":productId",
            element: <SingleBlog />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
