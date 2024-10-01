import React, {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';
import {Text} from '../../../UI/Text';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home1.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounce';
import {useNavigate} from 'react-router-dom';
// import {usePostData} from '../../../hocks/useGetPosts';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestIcon, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [nameMenu, setNameMenu] = useState('Главная');
  const navigate = useNavigate();
  // const getPosts = usePostData(nameMenu);
  // console.log(`getPostsInTabs`, getPosts);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);


  return (
    <Text As='div' className={style.container}>
      {isDropdown && (
        <Text As='div' className={style.wrapperBtn}>
          <Text As='button' className={style.btn}
            onClick={() => (setIsDropdownOpen(!isDropdownOpen))}
          >
            {nameMenu}
            <ArrowIcon width={15} height={15}/>
          </Text>
        </Text>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <Text As='ul' className={style.list}
          onClick={() => setIsDropdownOpen(false)}
        >
          {LIST.map(({value, link, id, Icon}) => (
            <Text As='li' className={style.item} key={id} >
              <Text As='button' className={style.btn}
                onClick={() => {
                  setNameMenu(value);
                  navigate(`/category/${link}`);
                }}>
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </Text>
            </Text>
          ))}
        </Text>
      )}
    </Text>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
