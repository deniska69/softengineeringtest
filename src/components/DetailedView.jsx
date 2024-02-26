import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

import PhotoPreview from './PhotoPreview';

const DetailedView = ({url, title, description, onOpenGallery}) => {
  return (
    <ScrollView>
      <PhotoPreview uri={url} onPress={onOpenGallery} />
      <View style={styles.view}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailedView;

const styles = StyleSheet.create({
  view: {
    gap: 10,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
