import axios from 'axios';

export const url = 'https://yts.lt/api/v2';

export default axios.create({
  baseURL: url,
});


export const movieListApi = "/list_movies.json";