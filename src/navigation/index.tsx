React;
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import GradientClock from '../screen/GradientClock/GradientClock';
import {RootStackParamList} from './types';
import React from 'react';
import ChasaingBubbles from '../screen/ChasaingBubbles/ChasaingBubbles';

const Stack = createStackNavigator<RootStackParamList>();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GradientClock" component={GradientClock} />
        <Stack.Screen name="ChasaingBubbles" component={ChasaingBubbles} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
