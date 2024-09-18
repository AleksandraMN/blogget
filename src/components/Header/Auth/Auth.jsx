import React, {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const img =
    <Text As='a' className={style.authLink} href={urlAuth}>
      <LoginIcon className={style.svg} width={128} height={128}/>
    </Text>;

  const {delToken} = useContext(tokenContext);
  const [openButton, setOpenButton] = useState(false);
  const {auth} = useContext(authContext);
  const {name, img2} = auth;

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
            onClick={delToken}
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
