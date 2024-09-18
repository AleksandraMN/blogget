import React from 'react';
import PropTypes from 'prop-types';
import {useAuth} from '../hocks/useAuth';

export const authContext = React.createContext({});

export const AuthContextProvider = ({children}) => {
  const [auth] = useAuth();

  return (
    <authContext.Provider value={{auth}}>
      {children}
    </authContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
