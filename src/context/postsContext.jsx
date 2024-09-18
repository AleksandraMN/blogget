import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useGetPosts} from '../hocks/useGetPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const {getPosts} = useGetPosts({});
  console.log(getPosts);
  const [isLoading] = useState(true);

  return (
    <postsContext.Provider value={{getPosts}}>
      {!isLoading ? children : 'Loading...'}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
