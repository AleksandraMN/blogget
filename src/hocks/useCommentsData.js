import {URL_API} from '../api/const';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    if (!token) return setCommentsData([]);

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(([
        {
          data: {
            children: [{data: post}],
          },
        },
        {
          data: {
            children,
          },
        },
      ]) => {
        const comments = children.map(item => item.data);
        setCommentsData([post, comments]);
      })
      .catch(err => {
        console.error(err);
        dispatch(deleteToken(''));
      });
  }, [id, token]);

  return commentsData;
};

