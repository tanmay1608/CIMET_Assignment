import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard";

const Blogs = () => {
  const blogsData = useLoaderData();

  return (
    <div className="flex flex-wrap justify-center">
      {blogsData.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      
    </div>
  );
};

export default Blogs;
