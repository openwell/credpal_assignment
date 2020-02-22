import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  Button
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const credpal = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [showDate, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);
  };
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <Text>Complete Profile</Text>
          <Text>
            Tell us even more about yourself and ensure that all details
            provided herein are valid and up to date.
          </Text>
        </View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default credpal;
