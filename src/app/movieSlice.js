import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    trending: [],
    upcoming: [],
    topRated: [],
    loading: false,
    error: false,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setTrendingState: (state, action) => {
            state.trending = action.payload;
        },
        setUpcomingState: (state, action) => {
            state.upcoming = action.payload;
        },
        setTopRatedState: (state, action) => {
            state.topRated = action.payload;
        },
        setLoadingState: (state, action) => {
            state.loading = action.payload;
        },
        setErrorState: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {setTrendingState, setUpcomingState, setTopRatedState, setLoadingState, setErrorState} = movieSlice.actions;

export default movieSlice.reducer;