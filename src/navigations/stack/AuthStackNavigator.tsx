import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import {authNavigations} from '../../constants';
import SignupScreen from '../../screens/auth/SignupScreen';

const Stack = createStackNavigator<AuthStackParamList>();

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
};
function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
      <Stack.Screen name={authNavigations.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
