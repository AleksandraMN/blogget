import {useState, useEffect, useContext} from 'react';
import {tokenContext} from '../context/tokenContext';
import {URL_API} from '../api/const';

export const useGetPosts = () => {
  const [getPosts, setGetPosts] = useState({});
  const {token, delToken} = useContext(tokenContext);

  useEffect(() => {
    if (!token) {
      return;
    }

    const getPost = async () => {
      await fetch(`${URL_API}/best`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          console.log(data.data.children);
          setGetPosts(data.data.children);
        })
        .catch((error) => {
          console.error(error);
          delToken();
          setGetPosts({});
        });
    };

    getPost();
  }, [token]);


  return {getPosts};
};
