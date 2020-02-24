import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Picker,
  SafeAreaView
} from 'react-native';

const edit = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Edit Profile</Text>
      <View style={styles.infoTab}>
        <Text style={styles.infoTabItem}>Personal</Text>
        <Text style={styles.infoTabItem}>Security</Text>
        <Text
          style={StyleSheet.flatten([styles.infoTabItem, styles.activeTab])}
        >
          Others
        </Text>
      </View>

      <View>
        <View style={styles.twoCol}>
          <Text style={styles.label}>Employer</Text>
          <TextInput
            value="CredPal Limited"
            placeholder="Name"
            style={styles.input}
          ></TextInput>
        </View>
      </View>
      <View>
        <View style={styles.twoCol}>
          <Text style={styles.label}>Office Address</Text>
          <TextInput
            value="75, Olonode Street, A...ba, Lagos."
            placeholder="Address"
            style={styles.input}
          ></TextInput>
        </View>
      </View>
      <View>
        <View style={styles.twoCol}>
          <Text style={styles.label}>Job Title</Text>
          <TextInput
            placeholder="Job Title"
            value="Graphics  UI/UX Designer"
            style={styles.input}
          ></TextInput>
        </View>
      </View>
      <View>
        <View style={styles.twoColPicker}>
          <Text style={styles.pickerLabel}>Contract Type</Text>
          <Picker style={{ height: 30 }} style={styles.picker}>
            <Picker.Item label="Full Time" value="1" />
            <Picker.Item label="Contract" value="2" />
          </Picker>
        </View>
      </View>
      <View>
        <View style={styles.twoCol}>
          <Text style={styles.label}>Salary</Text>
          <TextInput
            placeholder="N.00"
            value="₦ 840,000"
            style={styles.input}
          ></TextInput>
        </View>
      </View>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  twoCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#acafb126'
  },
  label: {
    paddingTop: 7,
    padding: 3
  },
  input: {
    textAlign: 'right',
    padding: 3
  },
  twoColPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingVertical: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#acafb126'
  },
  pickerLabel: {
    flex: 1,
    paddingTop: 15,
    padding: 3
  },
  picker: {
    flex: 1,
    width: '40%'
  },
  h1: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20
  },
  infoTab: {
    borderWidth: 1,
    borderColor: '#acafb126',
    flexDirection: 'row',
    borderRadius: 5
  },
  activeTab: {
    backgroundColor: '#274FED',
    color: '#fff',
    borderRadius: 5
  },
  infoTabItem: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: '#6a737d'
  }
});
export default edit;
