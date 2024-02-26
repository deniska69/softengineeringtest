/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';

import FeedItem from '../components/FeedItem';

const SlingAcademyContainer = props => {
  const {mode, navigation, slingAcademyStore} = props;

  useEffect(() => {
    fetchNext();
  }, []);

  const fetchNext = () => slingAcademyStore.getNext();

  const onPress = id => {
    navigation.push('DetailedViewScreen', {params: {id, mode: 'sling'}});
  };

  const keyExtractor = (item, index) => (item ? item?.id.toString() : index);

  const renderItem = ({item}) => (
    <FeedItem {...item} onPress={onPress} mode={mode} />
  );

  return (
    <FlatList
      key={mode}
      data={slingAcademyStore.data}
      renderItem={renderItem}
      onEndReached={fetchNext}
      keyExtractor={keyExtractor}
      contentContainerStyle={
        mode === 'List' ? styles.flatList : styles.flatListColumns
      }
      columnWrapperStyle={mode === 'Columns' ? styles.flatListColumns : null}
      numColumns={mode === 'List' ? 1 : 2}
    />
  );
};

export default inject('slingAcademyStore')(observer(SlingAcademyContainer));

const styles = StyleSheet.create({
  flatList: {
    gap: 10,
  },
  flatListColumns: {
    gap: 10,
    justifyContent: 'space-between',
  },
});
