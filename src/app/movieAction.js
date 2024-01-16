import {createAsyncThunk} from '@reduxjs/toolkit';
import { getTrendingMovies, getUpcomingMovies, getTopRatedMovies } from '../api';
import { setTrendingState, setUpcomingState , setTopRatedState} from './movieSlice';

export const GetTrendingMovies = createAsyncThunk(
    'movie/getTrendingMovies',
    async (_, {dispatch}) => {
        const response = await getTrendingMovies();
        dispatch(setTrendingState(response.results));
    }
)

export const GetUpcomingMovies = createAsyncThunk(
    'movie/getUpcomingMovies',
    async (_, {dispatch}) => {
        const response = await getUpcomingMovies();
        dispatch(setUpcomingState(response.results));
    }
)

export const GetTopRatedMovies = createAsyncThunk(
    'movie/getTopRatedMovies',
    async (_, {dispatch}) => {
        const response = await getTopRatedMovies();
        dispatch(setTopRatedState(response.results));
    }
)


