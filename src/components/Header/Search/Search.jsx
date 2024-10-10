import React, {useState} from 'react';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';
import {useDispatch} from 'react-redux';
import {searchRequest} from '../../../store/search/searchAction';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  // const token = useSelector(state => state.token.token);

  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(searchRequest({/* token,  */search}));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        className={style.search}
        type='search'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <button className={style.button}>
        <SearchIcon className={style.svg} width={128} height={128} />
      </button>
    </form>
  );
};
