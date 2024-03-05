import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParmList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
  GradientClock: undefined;
};

type ParamListKey = keyof RootStackParmList;

export type NavigationProps = NativeStackScreenProps<
  RootStackParmList,
  ParamListKey
>;
