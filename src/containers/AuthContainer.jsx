import React, {useState} from 'react';
import {inject, observer} from 'mobx-react';

import AuthView from '../components/AuthView';

const AuthContainer = ({userStore}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = value => setLogin(value);

  const onChangePassword = value => setPassword(value);

  const onAuth = () => userStore.auth(login, password);

  return (
    <AuthView {...{login, password, onAuth, onChangeLogin, onChangePassword}} />
  );
};

export default inject('userStore')(observer(AuthContainer));
