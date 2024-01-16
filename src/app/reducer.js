import {combineReducers} from '@reduxjs/toolkit';
import MovieReducer from './movieSlice';

export const rootReducer = combineReducers({
    movie: MovieReducer,
});