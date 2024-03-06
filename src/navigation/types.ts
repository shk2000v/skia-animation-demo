import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

type AnimationStackParamList = {
  GradientClock: undefined;
  ChasaingBubbles: undefined;
};
type StackParamList = AnimationStackParamList & HomeStackParamList;

// export type RootStackParamList = HomeStackParamList | AnimationStackParamList;
export type RootStackParamList = {
  [key in keyof StackParamList]: StackParamList[key] extends infer Param
    ? Param extends undefined
      ? undefined | StackParamList[key]
      : StackParamList[key]
    : never;
};

type ParamListKey = keyof RootStackParamList;

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  ParamListKey
>;
