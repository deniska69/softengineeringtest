import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import Theme from './constants';
import {Provider} from 'mobx-react';
import * as stores from './stores';

import Navigation from './navigation/Navigation';

const App = () => {
  const colorMode = useColorScheme() || 'dark';
  const isDarkMode = colorMode === 'dark';

  return (
    <Provider {...stores}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Theme[colorMode].backgroundColor}
        />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
