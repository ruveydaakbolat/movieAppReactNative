import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getTrendingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getMovieDetails,
  getMovieCredits,
  getSimilarMovies,
  getPersonDetails,
  getMovieCreditsPerson,
  getSearchMovies,
} from '../api';
import {
  setTrendingState,
  setUpcomingState,
  setTopRatedState,
  setMovieDetailState,
  setMovieCreditsState,
  setSimilarMoviesState,
  setPersonDetailState,
  setPersonMovieCreditsState,
  setSearchResultsState,
} from './movieSlice';

export const GetTrendingMovies = createAsyncThunk(
  'movie/getTrendingMovies',
  async (_, {dispatch}) => {
    const response = await getTrendingMovies();
    dispatch(setTrendingState(response.results));
  },
);

export const GetUpcomingMovies = createAsyncThunk(
  'movie/getUpcomingMovies',
  async (_, {dispatch}) => {
    const response = await getUpcomingMovies();
    dispatch(setUpcomingState(response.results));
  },
);

export const GetTopRatedMovies = createAsyncThunk(
  'movie/getTopRatedMovies',
  async (_, {dispatch}) => {
    const response = await getTopRatedMovies();
    dispatch(setTopRatedState(response.results));
  },
);

export const GetMovieDetails = createAsyncThunk(
  'movie/getMovieDetails',
  async (id, {dispatch}) => {
    const response = await getMovieDetails(id);
    dispatch(setMovieDetailState(response))
  },
);

export const GetMovieCredits = createAsyncThunk(
  'movie/getMovieCredits',
  async (id, {dispatch}) => {
    const response = await getMovieCredits(id);
    dispatch(setMovieCreditsState(response.cast));
  }
)

export const GetSimilarMovies = createAsyncThunk(
  'movie/getSimilarMovies',
  async (id, {dispatch}) => {
    const response = await getSimilarMovies(id)
    dispatch(setSimilarMoviesState(response.results));
  }
)

export const GetPersonDetails = createAsyncThunk(
  'movie/getPersonDetails',
  async (id, {dispatch}) => {
    const response = await getPersonDetails(id);
    dispatch(setPersonDetailState(response));
  }
)

export const GetMovieCreditsPerson = createAsyncThunk(
  'movie/getMovieCreditsPerson',
  async (id, {dispatch}) => {
    const response = await getMovieCreditsPerson(id);
    dispatch(setPersonMovieCreditsState(response.cast));
  }
)

export const GetSearchMovies = createAsyncThunk(
  'movie/getSearchMovies',
  async (query, {dispatch}) => {
    const response = await getSearchMovies(query);
    dispatch(setSearchResultsState(response.results));
  }
)