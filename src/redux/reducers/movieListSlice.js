import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    moviesList: [],
    error: false,
    loading: true
}

// movie list slice reducers and respective state
export const movieListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        getMovieList: (state) => {
            return state
        },
        getMovieListSuccess: (state, action) => {
            return {
             ...state,
             moviesList: action.payload,
             loading: false   
            }
        }

    }
})

export const { getMovieList, getMovieListSuccess } = movieListSlice.actions;

export const moviesListData = (state) => state.moviesList

export default movieListSlice.reducer 
