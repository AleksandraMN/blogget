import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (posts) => ({
  type: POSTS_REQUEST_SUCCESS,
  data: posts.children,
  after: posts.after,
});
export const postsRequestSuccessAfter = (posts) => ({
  type: POSTS_REQUEST_SUCCESS_AFTER,
  data: posts.children,
  after: posts.after,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const postsRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;

  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().token.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;


  if (!token || loading || isLast) return;

  dispatch(postsRequest());
  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(response);
      // console.log('response.status:', response.status);
      const {data: {data}} = response;
      const postsData = data;
      // console.log('postsData: ', postsData);
      if (after) {
        dispatch(postsRequestSuccessAfter(postsData));
      } else {
        dispatch(postsRequestSuccess(postsData));
      }
    })
    .catch(err => {
      console.error('err.status:', err.status);
      dispatch(postsRequestError(err.message));
    });
};
