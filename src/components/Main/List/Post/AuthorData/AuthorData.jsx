import React, {useState} from 'react';
import style from './AuthorData.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import Modal from '../../../../Modal';

export const AuthorData = ({title, author, markdown, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          size={14}
          tsize={22}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {title}
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
        {author}
      </Text>
      {isModalOpen && (
        <Modal id={id}
          closeModal={() => setIsModalOpen(false)}
        />)}
    </div>
  );
};

AuthorData.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};
