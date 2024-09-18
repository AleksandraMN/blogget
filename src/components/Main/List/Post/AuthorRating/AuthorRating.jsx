import React from 'react';
import style from './AuthorRating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const AuthorRating = (props) => {
  if (props.ups) {
    <Text As='div' className={style.rating}>
      <Text As='button' className={style.up}
        aria-label='Увеличить рейтинг'/>
      <Text As='p' className={style.ups}>{props.ups}</Text>
      <Text As='button' className={style.down}
        aria-label='Понизить рейтинг' />
    </Text>;
  } else {
    return null;
  }
};

AuthorRating.propTypes = {
  ups: PropTypes.number,
  ar: PropTypes.string,
};
