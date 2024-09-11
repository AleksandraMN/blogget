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
  // console.log('title, author, ups, date: ', title, author, ups, date);

  if (postsData) {
    return (
      <li className={style.post}>

        <AuthorPhoto />

        <AuthorData title={title} author={author} />

        <AuthorRating ups={ups} />

        <TimePost date={date} />

        <ButtonDelete />

      </li>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

Post.propTypes = {
  postsData: PropTypes.object,
};
