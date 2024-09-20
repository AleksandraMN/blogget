import React from 'react';
import PropTypes from 'prop-types';
import {useGetPosts} from '../hocks/useGetPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [getPosts] = useGetPosts();
  console.log(getPosts);

  return (
    <postsContext.Provider value={getPosts}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  getPosts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};
