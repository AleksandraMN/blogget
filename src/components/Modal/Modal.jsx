import React, {useEffect, useRef} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
// import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hocks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';


export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const {commentsData} = useCommentsData(id);
  const [post, comments] = commentsData;
  console.log(commentsData);


  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleKeyup = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);
    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>

        <h2 className={style.title}>{post.title}</h2>

        <div className={style.content}>
          {/*  <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                }
              }
            },
          }}>
            {post.markdown}
          </Markdown> */}
        </div>

        <p className={style.author}>{post.author}</p>

        <FormComment/>

        <Comments comments={comments} />

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
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  comments: PropTypes.object,
  post: PropTypes.object,
};
