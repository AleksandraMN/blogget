
import {watchSearch} from './search/searchSaga';

export default function* rootSaga() {
  yield watchSearch();
}


/*
import {takeEvery} from 'redux-saga/effects';
function* workerSaga(action) {
  yield console.log('работает');
}

export function* watchSaga() {
  yield takeEvery('SUBMIT', workerSaga);
} */
