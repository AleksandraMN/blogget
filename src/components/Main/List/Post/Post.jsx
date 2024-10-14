import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import AuthorPhoto from './AuthorPhoto';
import AuthorData from './AuthorData';
import AuthorRating from './AuthorRating';
import TimePost from './TimePost';
import ButtonDelete from './ButtonDelete';

export const Post = ({postsData}) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    selftext: markdown,
    created: date,
    id,
  } = postsData;

  return (
    <li className={style.post}>

      <AuthorPhoto thumbnail={thumbnail} />

      <AuthorData title={title} author={author} markdown={markdown} id={id}/>

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
  ]),
};
