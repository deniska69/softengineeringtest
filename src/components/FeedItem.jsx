import React from 'react';

import PhotoPreview from './PhotoPreview';

const FeedItem = props => {
  const {id, url, mode, onPress} = props;

  return <PhotoPreview uri={url} onPress={() => onPress(id)} mode={mode} />;
};

export default FeedItem;
