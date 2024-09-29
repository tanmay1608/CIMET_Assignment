
const ShimmerMovieCard = () => {
  return (
    <div className="m-2 rounded-xl w-44  relative ">
    <div className="w-full h-64 bg-gray-500 rounded-t-xl shimmer relative overflow-hidden"></div>
    <div className="p-2 w-full bg-gray-400 rounded-b-xl">
      <div className="h-4 mb-2 bg-gray-500 shimmer relative overflow-hidden"></div>
      <div className="h-4  w-24 mb-2 bg-gray-500 shimmer relative overflow-hidden"></div>
      <div className="flex">
        <div className="h-3 w-20 mx-1 bg-gray-500 shimmer relative overflow-hidden"
        
        ></div>
        <div className="h-3 w-20 mx-1 bg-gray-500 shimmer relative overflow-hidden"></div>
      </div>
    </div>
  </div>
  )
}

export default ShimmerMovieCard
