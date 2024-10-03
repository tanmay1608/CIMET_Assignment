import { useLoaderData } from "react-router-dom"
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const productsData=useLoaderData();
  return (
    <div className="flex flex-wrap justify-center">
      {
        productsData.map((product)=> <ProductCard key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Products
