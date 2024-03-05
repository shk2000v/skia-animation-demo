/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NavigationStack from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
