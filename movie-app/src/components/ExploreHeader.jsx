const ExploreHeader = ({
  genreList,
  genre,
  sortBy,
  handleSelectChange,
  handleParamChange,
}) => {
  const sortParameter = [
    { key: "popularity.desc", name: "Popularity Desc" },
    { key: "popularity.asc", name: "Popularity Asc" },
    { key: "vote_average.desc", name: "Rating Desc" },
    { key: "vote_average.asc", name: "Rating Asc" },
    { key: "title.asc", name: "Title A-Z" },
  ];
  return (
    <div className="flex justify-between">
      <p>Explore Movies</p>
      <div className="p-4">
        <select
          defaultValue=""
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            handleSelectChange(e);
          }}
        >
          <option value="" disabled>
            Select genre
          </option>
          {genreList.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <div className="p-4">
        <select
          value={sortBy}
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            handleParamChange(e);
          }}
        >
          <option value="Sort By"  disabled>
            Sort By
          </option>
          {sortParameter.map((param) => (
            <option key={param.key} value={param.name}>
              {param.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExploreHeader;
