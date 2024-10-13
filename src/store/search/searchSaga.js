import {/* takeLatest,  */put, select, call,
  apply, takeEvery} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
// import axios from 'axios';
import {
  SEARCH_REQUEST,
  searchRequestError,
  searchRequestSuccess,
} from './searchAction';

function* fetchSearch({search}) {
  const token = yield select(state => state.token.token);

  const {after, isLast} = yield select(state => state.search);

  if (!token || isLast) return;
  if (search) {
    try {
      const request = yield call(fetch,
        `${URL_API}/search?q=${search}&limit=10&${
        after ? `after=${after}` : ''}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

      const response = yield apply(request, request.json);
      yield put(searchRequestSuccess(response.data));
    } catch (e) {
      yield put(searchRequestError(e));
    }
  }
}

export function* watchSearch() {
  yield takeEvery(SEARCH_REQUEST, fetchSearch);
}

/*
const fetchSearch = async (action, token) => {
  const request = await axios(`${URL_API}/search?q=${action.search}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return request.data;
};
 */
/*
function* workerSearch(action) {
  const token = yield select(state => state.token.token);
  const {data} = yield call(fetchSearch, action.search, token);
  console.log('data: ', data);
  yield put(searchRequestSuccess(data));
} */
/*
export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, workerSearch );
}
*/
