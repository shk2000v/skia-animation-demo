import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProps, RootStackParmList} from '../navigation/types';

const Home = ({navigation, route}: NavigationProps) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>

        <Button
          title="GradientClock"
          onPress={() => navigation.navigate('GradientClock')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#111',
  },
});
