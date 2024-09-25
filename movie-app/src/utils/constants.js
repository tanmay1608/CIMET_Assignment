const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // eslint-disable-next-line no-undef
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};

export { API_OPTIONS };
