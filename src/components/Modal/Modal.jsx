import React, {useEffect, useRef, useState} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
// import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hocks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';
import AuthorRating from '../Main/List/Post/AuthorRating';
import TimePost from '../Main/List/Post/TimePost';
import AuthLoader from '../../UI/AuthLoader';


export const Modal = ({id, closeModal}) => {
  const [commentsData, loading, error] = useCommentsData(id);
  const [status, setStatus] = useState('');
  const [post, comments] = commentsData;
  const overlayRef = useRef(null);

  // console.log('loading: ', loading);
  // console.log('commentsData: ', commentsData);

  useEffect(() => {
    if (loading === true) {
      setStatus('loading');
    }
    if (error !== '') {
      setStatus('error');
    }
    if (post) {
      setStatus('loaded');
    }
  }, [error, post, loading]);


  const handlerClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handlerClick);
    return () => {
      document.removeEventListener('click', handlerClick);
    };
  }, []);

  const handlerKeyup = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handlerKeyup);
    return () => {
      document.removeEventListener('keyup', handlerKeyup);
    };
  }, []);


  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <AuthLoader />}
        {status === 'error' && 'ошибка'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>
              {post.title}
            </h2>
            <p className={style.author}>
              {post.author}
            </p>
            <AuthorRating ups={post.ups} />
            <TimePost date={post.created} />
            <FormComment/>
            <Comments comments={comments} />
          </>
        )}

        <button className={style.close} onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  selftext: PropTypes.string,
  closeModal: PropTypes.func,
  comments: PropTypes.object,
  post: PropTypes.object,
};

