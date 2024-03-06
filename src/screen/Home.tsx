import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProps, RootStackParmList} from '../navigation/types';

const {width, height} = Dimensions.get('screen');

const Home = ({navigation, route}: NavigationProps) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>

        <View style={styles.btnWrap}>
          <Button
            title="GradientClock"
            onPress={() => navigation.navigate('GradientClock')}
          />
          <Button
            title="ChasaingBubbles"
            onPress={() => navigation.navigate('ChasaingBubbles')}
          />
        </View>
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
  btnWrap: {
    gap: 15,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
