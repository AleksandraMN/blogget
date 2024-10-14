import React from 'react';
import style from './ButtonDelete.module.css';
import {Svg} from '../../../../../UI/Svg';

export const ButtonDelete = () => (
  <button className={style.delete}>
    <Svg DeleteIcon width={24} height={24}/>
  </button>
);
