import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-black justify-center items-center py-6 ">
      <ul className="flex p-2">
        <Link to={"/"}>
          <li className="bg-white text-black px-4 py-1 rounded-3xl mx-2 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-transform duration-200 ease-in-out cursor-pointer">
            Home
          </li>
        </Link>
        <Link to={"/products"}>
          <li className="bg-white text-black px-4 py-1 rounded-3xl mx-2 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-transform duration-200 ease-in-out cursor-pointer">
            Products
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="bg-white text-black px-4 py-1 rounded-3xl mx-2 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-transform duration-200 ease-in-out cursor-pointer">
            Contact Us
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
