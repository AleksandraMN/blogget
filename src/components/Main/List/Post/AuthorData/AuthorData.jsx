import React from 'react';
import style from './AuthorData.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const AuthorData = (props) => (
  <div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text
        As='a'
        size={18}
        tsize={24}
        className={style.linkPost}
        href='#post'
      >
        {props.title}
      </Text>
    </Text>
    <Text
      As='a'
      size={12}
      tsize={14}
      color='orange'
      className={style.linkAuthor}
      href='#author'
    >
      {props.author}
    </Text>
  </div>
);

AuthorData.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
