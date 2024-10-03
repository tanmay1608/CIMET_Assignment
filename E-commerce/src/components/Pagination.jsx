import { Link } from "react-router-dom";

const Pagination = ({ handlePageChange, page }) => {
  const arr = new Array(10).fill(0);

  return (
    <div className="flex justify-center">
      {arr.map((el, index) => {
        
        return (
          <Link key={index} to={`?page=${index+1}`}>
            <p
              className={`m-2 p-2 border border-dark-gray hover:text-white hover:bg-dark-gray text-center cursor-pointer ${
                page === index+1 ? "bg-dark-gray text-white" : "text-dark-gray bg-white"
              }`}
              onClick={() => handlePageChange(index+1)}
            >
              {index+1}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
