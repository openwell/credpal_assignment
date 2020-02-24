import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import Icon from '../constant/icon';
const inputSelect = props => {
  const { iconName, propStyles, name, options } = props;
  const Icons = Icon[iconName] || Icon['User'];
  return (
    <View style={StyleSheet.flatten([styles.inputContainer, propStyles])}>
      <View style={styles.icon}>
        <Icons />
      </View>
      <Text style={styles.label}>{name}</Text>
      <View style={styles.borderBottom}>
        <Picker style={{ height: 30 }}>
          {options.map((elem, i) => (
            <Picker.Item label={elem} value={elem} key={i} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    // marginVertical: 4,
    flex: 1
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
export default inputSelect;
