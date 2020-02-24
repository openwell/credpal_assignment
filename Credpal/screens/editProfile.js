import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Picker,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import InputSelect from '../components/inputSelect';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const edit = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        style={styles.container}
        enableAutomaticScroll
        extraScrollHeight={30}
        enableOnAndroid={true}
        extraHeight={Platform.select({ android: 100 })}
      >
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
            <InputSelect
              propStyles={styles.picker}
              options={['Full-Time', 'Contract']}
            />
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
        <View>
          <View style={styles.twoCol}>
            <Text style={styles.label}>Next of Kin</Text>
            <TextInput
              placeholder="John"
              value="Oshokoya Joseph"
              style={styles.input}
            ></TextInput>
          </View>
        </View>
        <View>
          <View style={styles.twoColPicker}>
            <Text style={styles.pickerLabel}>Relationship</Text>
            <InputSelect
              propStyles={styles.picker}
              options={['Brother', 'Sister']}
            />
          </View>
        </View>
        <View>
          <View style={styles.twoCol}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              placeholder="address"
              value="Route 7, Ink Park, Toronto,...o, CA."
              style={styles.input}
            ></TextInput>
          </View>
        </View>
        <View>
          <View style={styles.twoCol}>
            <Text style={styles.label}>Contact Number</Text>
            <TextInput
              placeholder="080********"
              value="0708 188 8124"
              style={styles.input}
            ></TextInput>
          </View>
        </View>

        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Home')}
        />
      </KeyboardAwareScrollView>
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
