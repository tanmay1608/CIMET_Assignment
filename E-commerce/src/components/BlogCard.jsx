
const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
        <p className="text-gray-700 text-base mb-4">{blog.body}</p>
      </div>
    </div>
  );
};

export default BlogCard;
