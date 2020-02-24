import React, { useState } from 'react';
import Profile from './screens/profile';
import Edit from './screens/editProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Text, Button } from 'react-native';
import NavButton from './components/navButton';
const index = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Profile}
          options={{
            headerTitleStyle: {
              fontSize: 16
            }
            // headerLeft: null
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            title: 'Discard',
            headerRight: () => <NavButton action />,
            headerTintColor: 'red',
            headerTitleStyle: {
              fontSize: 16
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
