import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import ProductsWrapper from "../pages/products/ProductsWrapper"
import Products from "../pages/products/Products"
import SingleProduct from "../pages/products/SingleProduct"
import BlogsWrapper from "../pages/blogs/BlogsWrapper"
import Blogs from "../pages/blogs/Blogs"
import SingleBlog from "../pages/blogs/SingleBlog"
import Cart from "../pages/Cart"


const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/products',
                element:<ProductsWrapper/>,
                children:[
                    {
                        index:true,
                        element:<Products/>
                    },
                    {
                        path:':productId',
                        element:<SingleProduct/>
                    }
                ]
            },
            {
                path:'/blogs',
                element:<BlogsWrapper/>,
                children:[
                    {
                        index:true,
                        element:<Blogs/>
                    },
                    {
                        path:':productId',
                        element:<SingleBlog/>
                    }
                ]
            },
            {
                path:'/cart',
                element:<Cart/>
            },
        ]
       
    }
])

const Router = () => {
  return <RouterProvider router={router}/>
}

export default Router

