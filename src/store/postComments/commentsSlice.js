import {createSlice} from '@reduxjs/toolkit';
import {postCommentsRequestAsync} from './postCommentsAction';

const initialState = {
  loading: false,
  data: {},
  comments: [],
  error: '',
  status: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCommentsRequestAsync.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(postCommentsRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
        state.status = 'loaded';
      })
      .addCase(postCommentsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'error';
      });
  },
});

const reducer = commentsSlice.reducer;
export default reducer;

