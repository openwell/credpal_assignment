import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from '../constant/icon';
const CalenderInput = props => {
  const { name, propStyles } = props;
  const [date, setDate] = useState(new Date());
  const [showDate, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios' ? true : false);
    setDate(currentDate);
  };
  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <View style={StyleSheet.flatten([styles.inputContainer, propStyles])}>
      <View style={styles.icon}>
        <Icon.Date />
      </View>
      <Text style={styles.label}>{name}</Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.borderBottom}>
        <View>
          <Text style={styles.placeholder}>{date.toLocaleDateString()}</Text>
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginVertical: -2,
    flex: 1
  },
  placeholder: {
    fontSize: 16,
    paddingBottom: 4,
    paddingTop: 2,
    paddingLeft: 10
  },
  label: {
    color: '#274FED',
    fontSize: 11,
    marginLeft: 30,
    paddingBottom: 5
  },
  icon: {
    position: 'absolute',
    top: 26,
    left: 5
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#8E8E8E',
    paddingBottom: 5,
    paddingLeft: 20
  }
});
export default CalenderInput;
