import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link} from "react-router-dom";
import NavigationItem from "./NavigationItem";

const Header = () => {
  const { cart,currencyData,handleConverisonOption } = useContext(CartContext);
  
  return (
    <header className="flex justify-between p-4 bg-dark-gray items-center text-white inter-medium ">
      <h1 className="squada-one-regular">
        <Link to="/">ShopAtEase</Link>
      </h1>
      <ul className="flex bg-normal-gray  rounded-full ">
        <NavigationItem  route={"Products"}/>
        <NavigationItem  route={"Blogs"}/>
        <NavigationItem  route={"Something"}/>
      </ul>

    <div className="flex justify-center items-center">
    <div className="relative w-10 h-10 flex justify-center items-center">
        <p className="text-3xl">🛒</p>
        <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex justify-center items-center">
          {cart.length}
        </p>
      </div>
      <select className="text-white bg-dark-gray mx-3" onChange={(e)=> handleConverisonOption(e.target.value)}>
        {
          Object.keys(currencyData).map((currency,index)=> <option key={index} value={currency}>{currency}</option>)
        }
      </select>
    </div>
      
    
    </header>
  );
};

export default Header;
