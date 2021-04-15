import { getMovies } from "./db";

/* const api = axios.create({
  baseURL: "https://kr.api.riotgames.com/lol/",
  params: {
    api_key: "RGAPI-8413d11a-0bf2-4232-b2e3-baf2051fef04",
  },
});

const test = async (name = "shirabii") => {
  const {
    data: { status },
  } = await api.get(`summoner/v4/summoners/by-name/${name}`);
  return status;
}; */

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),/* _ 이걸쓰는이유는 저부분을 어차피 안쓸려고해서.. */
  },
};

export default resolvers;
