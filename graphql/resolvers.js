import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),/* _ 이걸쓰는이유는 저부분을 어차피 안쓸려고해서.. */
  },
};

export default resolvers;
