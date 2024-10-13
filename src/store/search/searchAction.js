export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR';
export const SEARCH_CLEAR_POSTS = 'SEARCH_CLEAR_POSTS';
export const SEARCH_INFO = 'SEARCH_INFO';

export const searchRequest = (search) => ({
  type: SEARCH_REQUEST,
  // token,
  search,
});

export const searchRequestSuccess = ({children, after}) => ({
  type: SEARCH_REQUEST_SUCCESS,
  posts: children,
  after,
});


export const searchRequestError = ({error}) => ({
  type: SEARCH_REQUEST_ERROR,
  error,
});


export const searchClearPosts = () => ({
  type: SEARCH_CLEAR_POSTS,
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  postsPage: '',
  status: '',
  search: '',
});

export const searchInfo = ({search}) => ({
  type: SEARCH_INFO,
  search,
});
