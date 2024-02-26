import {Alert} from 'react-native';
import {action, makeAutoObservable} from 'mobx';

import {DEV_LOGIN, DEV_PASSWORD} from '../constants';

export default class UserStore {
  constructor() {
    this.isLogin = false;

    makeAutoObservable(this);
  }

  auth = action((login, password) => {
    const isLogin = login === DEV_LOGIN && password === DEV_PASSWORD;
    this.isLogin = isLogin;

    if (!login) {
      Alert.alert('Ошибка авторизации!');
    }
  });
}
