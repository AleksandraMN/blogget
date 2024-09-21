import {URL_API} from '../api/const';
import {useEffect, useState} from 'react';
import {useToken} from './useToken';

export const usePostData = () => {
  const [token, delToken] = useToken();
  const [postsData, setPostData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best?limit=10`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({data}) => {
        const postsData = data.children;
        setPostData(postsData);
      })
      .catch(err => {
        console.error(err);
        delToken();
      });
  }, [token]);
  return postsData;
};
