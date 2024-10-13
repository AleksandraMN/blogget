import React, {useState} from 'react';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';
import {useDispatch} from 'react-redux';
import {searchInfo,
  searchClearPosts} from '../../../store/search/searchAction';
import {useNavigate} from 'react-router-dom';
import {clearPosts} from '../../../store/posts/postsSlice';


export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handlerSubmit = e => {
    e.preventDefault();
    if (search) {
      // console.log('search: ', search);
      dispatch(clearPosts());
      dispatch(searchClearPosts());
      dispatch(searchInfo({search}));
      navigate(`/${search}`);
    }
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
