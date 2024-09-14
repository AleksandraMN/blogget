import React, {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';
import {useAuth} from '../../../hocks/useAuth';

export const Auth = ({token, delToken}) => {
  const img =
    <Text As='a' className={style.authLink} href={urlAuth}>
      <LoginIcon className={style.svg} width={128} height={128}/>
    </Text>;

  const [auth] = useAuth([], token, delToken, URL_API);
  const {name, img2} = auth;
  const [openButton, setOpenButton] = useState(false);

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
