import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Text, View, Button } from "react-native";
import { StackParamList } from "../component";
import { user } from '../model';

type Props = NativeStackScreenProps<StackParamList, 'First'>;
function First({ navigation }: Props) {
  useEffect(() => {
    user.getUser().then((user) => {
      if (!user) navigation.navigate('SetupTime');
    });
  }, []);

  return (
    <View>
      <Text>First</Text>
      <Button title="setup" onPress={() => navigation.navigate('SetupTime')}/>
    </View>
  )
};

export default First;
