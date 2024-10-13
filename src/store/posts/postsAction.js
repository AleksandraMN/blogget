import {createAsyncThunk} from '@reduxjs/toolkit';
import {URL_API} from '../../api/const';
import axios from 'axios';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    // console.log('newPage: ', newPage);
    const token = getState().token.token;

    let page = getState().posts.postsPage;
    // console.log('page: ', page);
    if (newPage) {
      page = newPage;
    }
    const isLast = getState().posts.isLast;
    let after = getState().posts.after;
    /*  const loading = getState().posts.loading; */
    const prevData = getState().posts.data;

    if (!token || isLast || !page ||
       page === undefined) return {data: prevData, after, page};


    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }).then(({data}) => {
      after = data.data.after;
      let posts = data.data.children;
      posts = [...prevData, ...posts];
      posts = [...new Set(posts)];

      return {data: posts, after, page};
    }).catch(error => {
      console.error('err.status:', error.status);
      return error.message;
    });
  });
