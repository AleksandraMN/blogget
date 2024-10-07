import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  postsPage: '',
  status: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePostsPage: (state, action) => { // редукторы
      if (state.postsPage === action.payload) return;
      state.after = '';
      state.isLast = false;
      state.postsPage = action.payload.newPage;
      state.status = '';
    },
    clearPosts: (state) => { // удаление постов
      state.loading = false;
      state.data = [];
      state.error = '';
      state.after = '';
      state.isLast = false;
      state.postsPage = '';
      state.status = '';
    },
  },
  extraReducers: (builder) => { // редукторы условий
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.status = 'loading';
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        // console.log('action: ', action);
        state.loading = false;
        state.data = action.payload.data;
        state.after = action.payload.after;
        state.postsPage = action.payload.page;
        state.error = '';
        state.isLast = !action.payload.after;
        state.status = 'loaded';
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'error';
      });
  },
});

export default postsSlice.reducer;
export const {
  changePostsPage,
  clearPosts
} = postsSlice.actions;
