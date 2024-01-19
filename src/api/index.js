import {requests} from '../utils/requests';

export const getTrendingMovies = () => requests.get('/trending/all/day');

export const getUpcomingMovies = () => requests.get('/movie/upcoming');

export const getTopRatedMovies = () => requests.get('/movie/top_rated');

export const getMovieDetails = id => requests.get(`/movie/${id}`);

export const getMovieCredits = id => requests.get(`/movie/${id}/credits`);

export const getSimilarMovies = id => requests.get(`/movie/${id}/similar`);

export const getPersonDetails = id => requests.get(`/person/${id}`);

export const getMovieCreditsPerson = id =>
  requests.get(`/person/${id}/movie_credits`);

export const getSearchMovies = query => requests.get(`/search/movie?query=${query}`);

export const fallbackMoviePoster =
  'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';

export const fallbackPersonImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';
