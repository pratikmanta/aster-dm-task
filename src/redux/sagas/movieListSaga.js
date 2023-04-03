import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_MOVIE_LIST, GET_SEARCHED_MOVIE_LIST } from "../actions/actions";
import { getMovieListSuccess } from "../reducers/movieListSlice";
import { callAPI } from ".";
import { getSearchedMovieSuccess } from "../reducers/searchMovieSlice";

let envKey = process.env.REACT_APP_API_KEY
let BASE_URL = process.env.REACT_APP_BASE_URL

// fetch popular movies saga
export function* fetchMovieSaga() {
    try {
        let PopURL = BASE_URL + `movie/popular/?api_key=${envKey}&language=en-US&page=1`
        let result = yield call(() =>
          callAPI({ 
            url: PopURL, 
            method:'GET', 
        })
        );
        const { results } = result.data
        yield put(getMovieListSuccess(results));
      } 
      catch (e) {
        console.log(e)
    }
}

// fetch searched movie saga
export function* fetchSearchedMovie(action) {
    try {

        let searchURL = BASE_URL + `search/movie?api_key=${envKey}&language=en-US&query=${action.payload}&page=1&include_adult=false`
        let result = yield call(() =>
          callAPI({ 
            url: searchURL, 
            method:'GET', 
        }));
        const { results } = result.data
        yield put(getSearchedMovieSuccess(results));
      } 
      catch (e) {
        console.log(e)
    }
}

function* movieSagas(){
  yield takeEvery(GET_MOVIE_LIST, fetchMovieSaga)
  yield takeLatest(GET_SEARCHED_MOVIE_LIST, fetchSearchedMovie)
}


export default movieSagas


