
import {
  POSTCOMMENTS_REQUEST,
  POSTCOMMENTS_REQUEST_SUCCESS,
  POSTCOMMENTS_REQUEST_ERROR,
} from './postCommentsAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  id: '',
};

export const postCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTCOMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        id: action.id,
        error: '',
      };
    case POSTCOMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case POSTCOMMENTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        id: '',
      };
    default:
      return state;
  }
};
