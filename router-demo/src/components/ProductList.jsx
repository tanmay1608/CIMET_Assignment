/* eslint-disable react/prop-types */
import Product from "./Product";

const ProductList = ({productList}) => {

    
  return (
    <div className="flex flex-wrap bg-black justify-center pt-6">
      {
        productList.map((product)=>{
          return  <Product key={product.id} product={product}/>
        })
      }
    </div>
  )
}

export default ProductList
