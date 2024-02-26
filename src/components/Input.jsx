import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  const {value, onChange, placeholder = 'Text...'} = props;

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  },
});
