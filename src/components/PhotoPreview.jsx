import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DEVICE_WIDTH} from '../constants';

const reductionFactor = 2.05;

const PhotoPreview = props => {
  const {uri, mode = 'List', onPress = null} = props;

  if (!onPress) {
    return <Photo uri={uri} mode={mode} />;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Photo uri={uri} mode={mode} />
    </TouchableOpacity>
  );
};

export default PhotoPreview;

const Photo = ({uri, mode}) => (
  <View style={mode === 'List' ? styles.view : styles.viewSmall}>
    <Image
      source={{uri}}
      style={mode === 'List' ? styles.image : styles.imageSmall}
    />
  </View>
);

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH,
    backgroundColor: 'white',
  },
  viewSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH / reductionFactor,
    height: DEVICE_WIDTH / reductionFactor,
    backgroundColor: 'white',
  },
  image: {
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH,
    resizeMode: 'cover',
  },
  imageSmall: {
    width: DEVICE_WIDTH / reductionFactor,
    height: DEVICE_WIDTH / reductionFactor,
    resizeMode: 'cover',
  },
});
