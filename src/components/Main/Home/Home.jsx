import React from 'react';
import style from './Home.module.css';
import {Text} from '../../../UI/Text';

export const Home = () => (
  <div className={style.content}>
    <Text As='h2' center>Стартовая страница</Text>
    <Text As='h4' center>Добро пожаловать!</Text>
    <Text As='h5'center>Выберите страницу</Text>
  </div>
);
