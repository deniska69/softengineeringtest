import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import SlingAcademyContainer from '../containers/SlingAcademyContainer';

const SlingAcademyScreen = ({navigation}) => {
  const [mode, setMode] = useState('List');
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Sling Academy',
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <Button />,
    });
  }, [navigation, mode]);

  const onChangeMode = () => {
    setMode(mode === 'List' ? 'Columns' : 'List');
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Button = () => {
    return (
      <TouchableOpacity onPress={onChangeMode}>
        <Text style={styles.buttonText}>{mode}</Text>
      </TouchableOpacity>
    );
  };

  return <SlingAcademyContainer navigation={navigation} mode={mode} />;
};

export default SlingAcademyScreen;

const styles = StyleSheet.create({
  buttonText: {
    marginRight: 8,
  },
});
