import React, {useEffect} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {NavigationProps} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Canvas,
  Rect,
  SweepGradient,
  center,
  vec,
} from '@shopify/react-native-skia';
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const GradientClock = ({navigation, route}: NavigationProps) => {
  const rotation = useSharedValue(0);
  const {height, width} = useWindowDimensions();

  const centerX = width / 2;
  const centerY = height / 2;
  const centerVec = vec(centerX, centerY);

  const animationRotation = useDerivedValue(() => {
    return [{rotate: Math.PI * rotation.value}];
  }, [rotation]);
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(2, {
        duration: 4000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Canvas style={styles.container}>
          <Rect x={0} y={0} width={width} height={height}>
            <SweepGradient
              origin={centerVec}
              c={centerVec}
              start={0}
              end={360}
              colors={['white', 'grey', '#222222', 'black']}
              transform={animationRotation}
            />
          </Rect>
        </Canvas>
        <Text style={styles.dayText}>DAY</Text>
        <Text style={styles.ngihtText}>NIGHT</Text>
      </View>
    </SafeAreaView>
  );
};

export default GradientClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayText: {
    position: 'absolute',
    top: 70,
    fontWeight: '100',
    letterSpacing: 8,
    fontSize: 90,
    color: 'black',
    alignSelf: 'center',
  },
  ngihtText: {
    position: 'absolute',
    bottom: 70,
    fontWeight: '100',
    letterSpacing: 8,
    fontSize: 90,
    color: 'white',
    alignSelf: 'center',
  },
});
