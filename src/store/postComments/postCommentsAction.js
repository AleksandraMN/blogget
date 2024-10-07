import {URL_API} from '../../api/const';
import axios from 'axios';
// import {commentsSlice} from './commentsSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postCommentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;

    // dispatch(commentsSlice.actions.commentsRequest(id));
    return axios(`${URL_API}/comments/${id}`, {
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
        // dispatch(commentsSlice.actions.commentsRequestSuccess(
        // {post, comments}));
        return {post, comments};
      })
      .catch(error => {
        console.error(error);
        // dispatch(commentsSlice.actions.commentsRequestError(error.message));
        return error.message;
      });
  },
);
