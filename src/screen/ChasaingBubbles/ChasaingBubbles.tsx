import {Canvas, Circle} from '@shopify/react-native-skia';
import React, {Suspense, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {height} = Dimensions.get('window');

type DotType = {
  index: number;
  xPosition: SharedValue<number>;
  yPosition: SharedValue<number>;
};
const Dot = ({index, xPosition, yPosition}: DotType) => {
  const currentRow = Math.floor(index / 12) * 30 + 30;
  const currentColumn = Math.floor(index % 12) * 30 + 35;

  const radius = useDerivedValue(() => {
    const hypoteneuse = Math.hypot(
      xPosition.value - currentColumn,
      yPosition.value - 30 - currentRow,
    );

    if (hypoteneuse <= 55 && xPosition.value !== -1) {
      return withSpring(12, {
        overshootClamping: true,
      });
    } else {
      return withSpring(3, {
        overshootClamping: true,
      });
    }
  }, [xPosition, yPosition]);
  return <Circle cx={currentColumn} cy={currentRow} r={radius} color="blue" />;
};

//===============================================================
//===============================================================

const ChasaingBubbles = () => {
  const [nums, setNums] = useState<Array<number>>([]);
  useEffect(() => {
    const dotsForHeight = Math.round(height / 32);
    const numsArray = Array.from(Array(12 * dotsForHeight).keys());
    setNums(numsArray);
  }, []);

  const xPosition = useSharedValue(-1);
  const yPosition = useSharedValue(-1);

  //   console.log('[nums] : ', nums);
  //   console.log('[height] : ', height);
  //   console.log('[height] : ', Math.round(height / 35));
  //   console.log('arr : ', Array(12 * Math.round(height / 35)));
  //   console.log('arr : ', Array.from(Array(12 * Math.round(height / 32)).keys()));

  const gesture = Gesture.Pan()
    .onBegin(({x, y}) => {
      xPosition.value = x;
      yPosition.value = y;
    })
    .onChange(({x, y}) => {
      xPosition.value = x;
      yPosition.value = y;
    })
    .onEnd(({}) => {
      xPosition.value = -1;
      yPosition.value = -1;
    })
    .onFinalize(({}) => {
      xPosition.value = -1;
      yPosition.value = -1;
    });

  return (
    <Suspense
      fallback={
        <View>
          <Text>준비중</Text>
        </View>
      }>
      <View style={styles.container}>
        <GestureDetector gesture={gesture}>
          <Canvas style={{width: '100%', height: '100%'}}>
            {nums.map(dotIndex => {
              return (
                <Dot
                  key={dotIndex}
                  xPosition={xPosition}
                  yPosition={yPosition}
                  index={dotIndex}
                />
              );
            })}
          </Canvas>
        </GestureDetector>
      </View>
    </Suspense>
  );
};

export default ChasaingBubbles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 400,
  },
});
