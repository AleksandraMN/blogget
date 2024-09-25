import {URL_API} from '../api/const';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store/index';

export const usePostData = () => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
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
        dispatch(deleteToken(''));
      });
  }, [token]);
  return postsData;
};
