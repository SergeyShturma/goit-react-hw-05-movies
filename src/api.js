import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a8e6047ebc6d4087c1e6648e8f96688b';

export const fetchSearchMovies = async query => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=1`
    );
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchMovieCast = async id => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchMovieReviews = async id => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchTrailerMovies = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`)
    .then(resp => resp.data.results);
};
