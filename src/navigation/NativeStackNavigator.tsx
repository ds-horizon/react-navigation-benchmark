import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NativeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScreenA"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
}; 