import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS
} from './searchAction';


const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  postsPage: '',
  status: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        status: 'loading',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: '',
        after: action.after,
        status: 'loaded',
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
      };
    default:
      return state;
  }
};
