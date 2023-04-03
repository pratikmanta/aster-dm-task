import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import movieListReducer from './reducers/movieListSlice';
import searchMovieReducer from './reducers/searchMovieSlice';
import rootSaga from './sagas';

// initialize saga middleware
const sagaMiddleware = createSagaMiddleware()

// store configs 
const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        searchList: searchMovieReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store