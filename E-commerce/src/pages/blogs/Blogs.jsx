import { useLoaderData, useLocation } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";

const Blogs = () => {
  const blogsData = useLoaderData();
  const location = useLocation();
  const [page, setPage] = useState(1);

 
  useEffect(() => {
   
    const currentPage = Number(location.search.slice(-1)) || 1; 
    setPage(currentPage);
  }, [location.search]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {blogsData.slice((page - 1) * 10, page * 10).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Pagination handlePageChange={handlePageChange} page={page} />
    </>
  );
};

export default Blogs;
