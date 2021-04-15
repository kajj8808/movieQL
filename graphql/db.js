const axios = require("axios");

const api = axios.create({
  baseURL: "https://yts.mx/api/v2/",
});

export const getMovies = (limit, rating) => {
    let resURL = "list_movies.json/?";
    if(limit > 0){
        resURL += `limit=${limit}`;
    }
    if(rating > 0){
        resURL += `&minimum_rating=${rating}`;
    }
  return api.get(resURL).then((res) => {
    const { data : {data : {movies}}} = res;
    return movies;
  });
};
