import { all } from 'redux-saga/effects';
import Axios from "axios";
import movieSagas from './movieListSaga';

export let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export default function* rootSaga() {
  yield all([movieSagas()])
}