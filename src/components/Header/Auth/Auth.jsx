import React, {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {deleteToken} from '../../../store/tokenReducer.js';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hocks/useAuth.js';
import AuthLoader from '../../../UI/AuthLoader';
import {useNavigate} from 'react-router-dom';


export const Auth = () => {
  const dispatch = useDispatch();
  const [openButton, setOpenButton] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const {name, img2} = auth;
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      navigate('/');
    }
  }, [name]);


  /*  const handleAuthClick = (e) => {
    dispatch(updateToken(token));
  }; */

  const handleClick = (e) => {
    dispatch(deleteToken());
    clearAuth();
  };

  const img =
  <Text As='a'
    className={style.authLink} href={urlAuth} >
    <LoginIcon className={style.svg} width={128} height={128}/>
  </Text>;

  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoader/>
      ) : name ? (
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
