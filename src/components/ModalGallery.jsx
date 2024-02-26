import React from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import {DEVICE_WIDTH} from '../constants';

import PhotoPreview from './PhotoPreview';
const ModalGallery = props => {
  const {isOpen, onClose, uri} = props;

  return (
    <Modal visible={isOpen} onRequestClose={onClose} animationType="fade">
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.view}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="black"
            translucent
          />

          <ReactNativeZoomableView maxZoom={10}>
            <PhotoPreview uri={uri} />
          </ReactNativeZoomableView>

          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeBtn}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalGallery;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 12,
    width: DEVICE_WIDTH,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  closeBtn: {
    fontSize: 20,
    color: 'white',
  },
});
