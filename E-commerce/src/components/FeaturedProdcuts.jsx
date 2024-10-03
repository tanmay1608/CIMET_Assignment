import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const FeaturedProdcuts = () => {
  const productPreviewData = useLoaderData();
  console.log(productPreviewData);
  return (
    <div className="flex flex-wrap w-full justify-center ">
      {productPreviewData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProdcuts;
