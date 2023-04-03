import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    searchedMovies: [],
    error: false,
    loading: true
}

// search movie list slice reducers and respective state
export const searchMovieSlice = createSlice({
    name: 'searchedMovie',
    initialState,
    reducers: {
        getSearchedMovie: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        getSearchedMovieSuccess: (state, action) => {
            return {
             ...state,
             searchedMovies: action.payload,
             loading: false   
            }
        }

    }
})

export const { getSearchedMovie, getSearchedMovieSuccess } = searchMovieSlice.actions;

export const searchedList = (state) => state.searchedList

export default searchMovieSlice.reducer 