import React from 'react';
import style from './NotFound.module.css';
import {Text} from '../../../UI/Text';

export const NotFound = () => (
  <Text As='h2' center color='orange' className={style.content}>404</Text>
);
