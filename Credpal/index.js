import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Profile from './screens/profile';
import Edit from './screens/editProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const index = () => {
  const Stack = createStackNavigator();
  // return (
  //   <SafeAreaView style={{ flex: 1 }}>
  //     <Profile />
  //   </SafeAreaView>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Home" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default index;
