import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import CalenderInput from '../components/customCalenderInput';
import InputSelect from '../components/customInputSelect';
import CustomInput from '../components/customInput';
import Icon from '../constant/icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        style={styles.container}
        enableAutomaticScroll
        extraScrollHeight={30}
        enableOnAndroid={true}
        extraHeight={Platform.select({ android: 100 })}
      >
        <View style={styles.progressTab}>
          <View style={[styles.progressItem, styles.progressItemActive]} />
          <View style={styles.progressItem} />
          <View style={styles.progressItem} />
          <View style={styles.progressItem} />
          <View style={styles.progressItem} />
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.h1}>Complete profile</Text>
          <Text style={styles.p}>
            Tell us even more about yourself and ensure that all details
            provided herein are valid and up to date.
          </Text>
        </View>

        <View style={styles.twoCol}>
          <CalenderInput
            name="Date of Birth"
            propStyles={{ marginRight: 10 }}
          />
          <InputSelect
            name="Gender"
            propStyles={{ marginLeft: 10 }}
            iconName="Gender"
            options={['Male', 'Female']}
          />
        </View>

        <CustomInput
          name="Address"
          propStyles={{ flex: 0 }}
          iconName="home"
          placeholder="25, Ayonuga Street, Fadeyi, Lagos."
        />

        <View style={styles.twoCol}>
          <InputSelect
            name="Education Level"
            propStyles={{ marginRight: 10 }}
            iconName="School"
            options={['Graduate', 'Master']}
          />
          <InputSelect
            name="Nationality"
            propStyles={{ marginLeft: 10 }}
            iconName="Nation"
            options={['Nigeria', 'Kenya']}
          />
        </View>

        <View style={styles.twoCol}>
          <InputSelect
            name="Employment Status"
            propStyles={{ marginRight: 10 }}
            iconName="Job"
            options={['Employed', 'Un-Employed']}
          />

          <InputSelect
            name="Marital Status"
            propStyles={{ marginLeft: 10 }}
            iconName="Marital"
            options={['Single', 'Married']}
          />
        </View>

        <View style={styles.twoCol}>
          <CustomInput
            name="Guarantor’s Name"
            propStyles={{ marginRight: 10 }}
            iconName="User"
            placeholder="Aliu"
          />
          <InputSelect
            name="Relationship"
            propStyles={{ marginLeft: 10 }}
            iconName="Relationship"
            options={['Brother', 'Sister']}
          />
        </View>

        <View style={styles.twoCol}>
          <CustomInput
            name="Guarantor’s Address"
            propStyles={{ marginRight: 10 }}
            iconName="Home"
            placeholder="25, Ayonuga Street, Fadeyi, Lagos."
          />
          <CustomInput
            name="Guarantor’s Contact Number"
            propStyles={{ marginLeft: 10 }}
            iconName=""
            placeholder="0708 188 8124"
          />
        </View>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Edit')}
        >
          <Text
            style={{
              textAlign: 'center',
              padding: 12,
              color: '#fff'
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>

        <Text style={styles.secureNote}>
          <Icon.Lock /> Your data is secure.
        </Text>
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
    marginVertical: 10
  },
  h1: {
    fontSize: 40,
    fontWeight: '700',
    color: '#274FED'
  },
  p: {
    fontSize: 16,
    color: '#222222'
  },
  footerButton: {
    backgroundColor: '#274FED',
    borderRadius: 5,
    marginTop: 59,
    marginHorizontal: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  secureNote: {
    textAlign: 'center',
    marginVertical: 20,
    opacity: 0.5
  },
  progressTab: {
    flexDirection: 'row'
  },
  progressItemActive: {
    opacity: 1,
    marginLeft: 10
  },
  progressItem: {
    width: 55,
    height: 5,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#274FED',
    opacity: 0.1
  }
});
export default profile;
