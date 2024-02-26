import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.wrapLoader}>
      <ActivityIndicator size="large" color="gray" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  wrapLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
