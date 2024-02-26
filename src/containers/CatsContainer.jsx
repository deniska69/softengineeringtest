/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';

import FeedItem from '../components/FeedItem';

const CatsContainer = props => {
  const {mode, navigation, catsStore} = props;

  useEffect(() => {
    fetchNext();
  }, []);

  const fetchNext = () => catsStore.getNext();

  const onPress = id => {
    navigation.push('DetailedViewScreen', {params: {id, mode: 'cats'}});
  };

  const keyExtractor = (item, index) => (item ? item?.id.toString() : index);

  const renderItem = ({item}) => (
    <FeedItem {...item} onPress={onPress} mode={mode} />
  );

  return (
    <FlatList
      key={mode}
      data={catsStore.data}
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

export default inject('catsStore')(observer(CatsContainer));

const styles = StyleSheet.create({
  flatList: {
    gap: 10,
  },
  flatListColumns: {
    gap: 10,
    justifyContent: 'space-between',
  },
});
