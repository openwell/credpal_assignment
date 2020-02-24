import React, { useState } from 'react';
import { StyleSheet, Picker } from 'react-native';
const inputSelect = props => {
  const [option, setOption] = useState('');
  const { propStyles, options } = props;

  return (
    <Picker
      style={StyleSheet.flatten([propStyles], { height: 30 })}
      selectedValue={option}
      onValueChange={(itemValue, itemIndex) => setOption(itemValue)}
    >
      {options.map((elem, i) => (
        <Picker.Item label={elem} value={elem} key={i} />
      ))}
    </Picker>
  );
};
const styles = StyleSheet.create({});
export default inputSelect;
