

export const filterByTitle = (movies) => {
    console.log("inside");

    return [...movies].sort((a, b) => {
        console.log(a.title,b.title);
      if (a.title) {
        return a.title.localeCompare(b.title);
      } else {
        return a.name.localeCompare(b.name);
      }
    });
   
  };

  export const filterByPopularityAsc = (movies) => {
    return  [...movies].sort((a, b) => {
      return a.popularity - b.popularity;
    });
   
  };
  export const filterByPopularityDes = (movies) => {

    return [...movies].sort((a, b) => {
      return b.popularity-a.popularity ;
    });

   
  };

  export const filterByRatingDes = (movies) => {

    return [...movies].sort((a, b) => {
      return b.vote_average - a.vote_average ;
    });

   
  };

  export const filterByRatingAsc = (movies) => {
    console.log("inside")

    return [...movies].sort((a, b) => {
      //console.log(a.vote_average>b.vote_average);
      return a.vote_average - b.vote_average;
    });
  };