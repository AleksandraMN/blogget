import React, {useRef} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';

export const FormComment = () => {
  const textareaRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
    textareaRef.current.value = '';
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <Text As='h3' size={14} tsize={18}>Имя авторизованного пользователя</Text>
      <textarea
        className={style.textarea}
        ref={textareaRef}
      >
      </textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
