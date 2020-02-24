import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const navButton = props => {
  const { action } = props;
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#BECAFA'
  },
  text: {
    color: '#274FED',
    fontSize: 12
  }
});
export default navButton;
