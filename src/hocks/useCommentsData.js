import {URL_API} from '../api/const';
import {useEffect, useState} from 'react';
import {useToken} from './useToken';

export const useCommentsData = (id) => {
  const [token, delToken] = useToken();
  const [commentsData, setCommentsData] = useState([]);


  useEffect(() => {
    fetch(`${URL_API}/comments/${id}?sort=top`, {
      method: 'GET',
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
      .then((children) => {
        console.log(children);
        children.map(item => item.data);
        setCommentsData(commentsData);
        console.log(commentsData);
      },
      )
      .catch(err => {
        console.error(err);
        delToken();
      });
  }, [id]);
  console.log(commentsData);
  return {commentsData};
};


/*
[
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
] */
