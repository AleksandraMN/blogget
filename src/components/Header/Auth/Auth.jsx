import React, {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {deleteToken} from '../../../store/index.js';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from '../../../store/index.js';


export const Auth = () => {
  const token = useSelector(state => state.token);
  // console.log(token);
  const dispatch = useDispatch();
  const [openButton, setOpenButton] = useState(false);
  const {auth} = useContext(authContext);
  const {name, img2} = auth;


  const handleAuthClick = (e) => {
    dispatch(updateToken(token));
  };

  const handleClick = (e) => {
    dispatch(deleteToken(''));
  };

  const img =
  <Text As='a'
    className={style.authLink} href={urlAuth} onClick={handleAuthClick}>
    <LoginIcon className={style.svg} width={128} height={128}/>
  </Text>;

  return (
    <div className={style.container}>
      {name ? (
        <div>
          <button
            className={style.btn}
            onClick={() => setOpenButton(!openButton)}
          >
            <img
              className={style.img}
              src={img2}
              title={name}
              alt={`Аватар ${name}`}
            />
          </button>
          {openButton && <Text
            As='button'
            className={style.logout}
            color='wight'
            tsize={14}
            dsize={14}
            size={8}
            onClick={handleClick}
          >
            {'Выйти'}
          </Text>}
        </div>
      ) : img}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  delToken: PropTypes.func,
  auth: PropTypes.array,
};
