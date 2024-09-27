import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTCOMMENTS_REQUEST = 'POSTCOMMENTS_REQUEST';
export const POSTCOMMENTS_REQUEST_SUCCESS = 'POSTCOMMENTS_REQUEST_SUCCESS';
export const POSTCOMMENTS_REQUEST_ERROR = 'POSTCOMMENTS_REQUEST_ERROR';

export const postCommentsRequest = (id) => ({
  type: POSTCOMMENTS_REQUEST,
  id,
});

export const postCommentsRequestSuccess = (data) => ({
  type: POSTCOMMENTS_REQUEST_SUCCESS,
  data,
});

export const postCommentsRequestError = (error) => ({
  type: POSTCOMMENTS_REQUEST_ERROR,
  error,
});

export const postCommentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;

  dispatch(postCommentsRequest(id));
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log('response: ', response);
      const arr = response.data;
      const [
        {
          data: {
            children: [{data: post}],
          },
        },
        {
          data: {
            children,
          },
        },
      ] = arr;
      const comments = children.map(item => item.data);
      dispatch(postCommentsRequestSuccess([post, comments]));
    })
    .catch(err => {
      console.error(err);
      // console.error('err.status:', err.status);
      dispatch(postCommentsRequestError(err.message));
    });
};

