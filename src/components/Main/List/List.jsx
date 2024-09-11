import React from 'react';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 75,
      date: '2024-09-04T14:36:00.000Z',
      id: '56',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 30,
      date: '2024-09-05T18:10:00.000Z',
      id: '135',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 17,
      date: '2024-09-06T04:09:00.000Z',
      id: '189',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 29,
      date: '2024-09-08T06:57:00.000Z',
      id: '79',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postsData) => (
        <Post key={postsData.id} postsData={postsData} />
      ))}
    </ul>
  );
};

