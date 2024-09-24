import { Link} from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  //const {id}=useParams();
  // eslint-disable-next-line react/prop-types
  const { title, image, price,id } = product;
  return (
    <Link to={`/products/${id}`} state={{title,image,price}} className="bg-white w-60 m-3 flex flex-col justify-evenly items-center rounded-xl p-2 hover:scale-95 transition-transform duration-200 ease-in-out">
      <img src={image} />
      <h3 className="text-center text-sm italic font-semibold">{title}</h3>
      <h3 className="font-bold py-2">{`₹ ${price}`}</h3>
    </Link>
  );
};

export default Product;
