import React, {useLayoutEffect} from 'react';

import AuthContainer from '../containers/AuthContainer';

const AuthScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Authorization',
    });
  });

  return <AuthContainer />;
};

export default AuthScreen;
