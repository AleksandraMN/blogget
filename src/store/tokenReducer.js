// import {setToken} from '../api/token';

const initialState = {
  token: '', /* localStorage.getItem('bearer'), */
};

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});

export const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    /* if (action.token !== '') {
      setToken(action.token);
    } */
    if (action.token) {
      localStorage.setItem('bearer', action.token);
    }
  }
  if (action.type === DELETE_TOKEN) {
    /* setToken(action.token); */
    localStorage.removeItem('bearer');
  }
  next(action);
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      /* if (action.token !== '') {
        setToken(action.token);
      } */
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      /* setToken(''); */
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};
