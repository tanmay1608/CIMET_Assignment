const Header = () => {
  return (
    <header className="bg-dark flex justify-between px-5 py-2 items-center">
      <h2 className="text-white text-3xl font-semibold">
        Watch<span className="text-yellow">er</span>
      </h2>
      <ul className="flex px-5 text-gray-500">
        <li className="p-2 text-yellow">Movies</li>
        <li className="p-2">Tv Shows</li>
      </ul>
    </header>
  );
};

export default Header;
