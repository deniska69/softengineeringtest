import React from 'react';
import {ScrollView, View, StyleSheet, Button} from 'react-native';

import Input from './Input';

const AuthView = props => {
  const {login, password, onAuth, onChangeLogin, onChangePassword} = props;

  return (
    <ScrollView>
      <View style={styles.view}>
        <Input value={login} onChange={onChangeLogin} placeholder="Login..." />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder="Password..."
        />
        <Button onPress={onAuth} title="Login" />
      </View>
    </ScrollView>
  );
};

export default AuthView;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 10,
    padding: 8,
  },
});
