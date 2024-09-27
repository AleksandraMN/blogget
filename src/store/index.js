import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {thunk} from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';
import {postCommentsReducer} from './postComments/postCommentsReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  posts: postsReducer,
  postComments: postCommentsReducer,
});

export const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
// console.log('store: ', store);
