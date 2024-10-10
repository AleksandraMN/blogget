import React from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
// import {authContext} from '../../../context/authContext';
// import {commentContext} from '../../../context/commentContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/comment/commentReducer';
import {useAuth} from '../../../hocks/useAuth';

export const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();
  // const {setValue} = useContext(commentContext);
  const [auth] = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    // textareaRef.current.value = '';
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      >
      </textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
