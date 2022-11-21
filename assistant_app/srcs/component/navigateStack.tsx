import { createNativeStackNavigator } from '@react-navigation/native-stack'
export type StackParamList = {
  First: undefined;
  Main: undefined;
  SetupTime: undefined;
  SetupHoliday: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();
export default Stack;
