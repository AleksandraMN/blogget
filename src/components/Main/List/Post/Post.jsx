import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import AuthorPhoto from './AuthorPhoto';
import AuthorData from './AuthorData';
import AuthorRating from './AuthorRating';
import TimePost from './TimePost';
import ButtonDelete from './ButtonDelete';

export const Post = ({postsData}) => {
  const {title, author, ups, date} = postsData;
  console.log({postsData});
  console.log('title, author, ups, date: ', title, author, ups, date);

  return (
    <li className={style.post}>

      <AuthorPhoto />

      <AuthorData title={title} author={author} />

      <AuthorRating ups={ups} />

      <TimePost date={date} />

      <ButtonDelete />

    </li>
  );
};

Post.propTypes = {
  postsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.func,
  ]),
};
