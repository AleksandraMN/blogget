import React from 'react';
import PropTypes from 'prop-types';
import {usePostData} from '../hocks/useGetPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const getPosts = usePostData();

  return (
    <postsContext.Provider value={getPosts}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
