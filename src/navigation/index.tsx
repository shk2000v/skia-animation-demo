import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParmList} from './types';
import Home from '../screen/Home';
import GradientClock from '../screen/GradientClock/GradientClock';

const Stack = createStackNavigator<RootStackParmList>();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GradientClock" component={GradientClock} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
