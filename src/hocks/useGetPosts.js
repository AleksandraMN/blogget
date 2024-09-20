import {useState, useEffect, useContext} from 'react';
import {tokenContext} from '../context/tokenContext';
import {URL_API} from '../api/const';

export const useGetPosts = (nameMenu) => {
  const [getPosts, setGetPosts] = useState([]);
  const {token, delToken} = useContext(tokenContext);
  const posts = [];
  useEffect(() => {
    const getPost = async (token) => {
      await fetch(`${URL_API}/best?limit=10`, {
        method: 'GET',
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
          data.data.children.forEach((child) => {
            posts.push({
              thumbnail: child.data.thumbnail,
              title: child.data.title,
              ups: child.data.ups,
              selftext: child.data.selftext,
              date: child.data.created,
              author: child.data.author,
              id: child.data.id,
              parent_id: child.data.parent_id,
            });
          });
          if (posts) {
            setGetPosts(posts);
          }
          console.log(getPosts);
        })
        .catch((error) => {
          console.error(error);
          delToken();
          setGetPosts([]);
        });
    };

    if (nameMenu === 'Лучшие') {
      getPost(token);
    }
  }, [nameMenu]);

  function clearPost() {
    setGetPosts([]);
  }

  if (getPosts) {
    console.log(getPosts);
    return [getPosts, clearPost];
  }
};
