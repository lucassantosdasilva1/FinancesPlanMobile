import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../../modules/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator initialRouteName="Home">
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}
