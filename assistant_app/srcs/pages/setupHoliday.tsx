import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Chip, StackParamList } from '../component';

const day = ['일', '월', '화', '수', '목', '금', '토'];
type Props = NativeStackScreenProps<StackParamList, 'SetupHoliday'>;
function SetupHoliday({
  navigation,
}: Props) {
  const [holiday, setHoliday] = useState<number[]>([0, 6]);
  const onClick = useCallback((i: number) => {
    if (holiday.includes(i)) {
      setHoliday(holiday.filter((holi) => holi !== i));
    } else setHoliday([...holiday, i]);
  }, [holiday])

  return (
    <View>
      {day.map((str, i) => (
        <Chip
          init={holiday.includes(i)}
          onClick={() => onClick(i)}
        />
      ))}
      <Button title="확인" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

export default SetupHoliday;
