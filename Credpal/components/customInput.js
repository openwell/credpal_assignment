import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from '../constant/icon';
const customInput = props => {
  const { iconName, propStyles, name, placeholder } = props;
  const Icons = Icon[iconName] || Icon['User'];
  return (
    <View style={StyleSheet.flatten([styles.inputContainer, propStyles])}>
      <View style={styles.icon}>
        <Icons />
      </View>
      <Text style={styles.label}>{name}</Text>
      <View style={styles.borderBottom}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
        ></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginVertical: 2,
    flex: 1
  },
  textInput: {
    paddingLeft: 10
  },
  icon: {
    position: 'absolute',
    top: 23,
    left: 5
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#8E8E8E',
    paddingBottom: 5,
    paddingLeft: 20
  },
  placeholder: {
    fontSize: 18,
    paddingTop: 2,
    paddingLeft: 10
  },
  label: {
    color: '#274FED',
    fontSize: 11,
    marginLeft: 30
  }
});
export default customInput;
