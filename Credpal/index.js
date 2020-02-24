import React, { useState } from 'react';
import Profile from './screens/profile';
import Edit from './screens/editProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const index = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Profile} />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            title: 'Discard',
            headerLeft: null,
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
