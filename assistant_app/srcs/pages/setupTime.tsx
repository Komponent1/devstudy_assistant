import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Text, Button } from 'react-native';
import { StackParamList } from '../component';
import DatePicker from 'react-native-date-picker';

type Props = NativeStackScreenProps<StackParamList, 'SetupTime'>;
function SetupTime({ navigation }: Props) {
  useEffect(() => {
    const backRemove = function(e: any) {
      // e.preventDefault();
      navigation.dispatch(e.data.action);
    }
    navigation.addListener('beforeRemove', backRemove);

    return () => navigation.removeListener('beforeRemove', backRemove);
  }, []);
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());
  const [startOpen, setStartOpen] = useState<boolean>(false);
  const [endOpen, setEndOpen] = useState<boolean>(false);

  return (
    <View>
      <Text>시작 시간을 선택해주세요</Text>
      <TouchableWithoutFeedback onPress={() => setStartOpen(true)}>
        <Text>{start.getHours()}:{start.getMinutes()}</Text>
      </TouchableWithoutFeedback>
      <Text>종료 시간을 선택해주세요</Text>
      <TouchableWithoutFeedback onPress={() => setEndOpen(true)}>
        <Text>{end.getHours()}:{end.getMinutes()}</Text>
      </TouchableWithoutFeedback>
      <DatePicker
        modal
        mode="time"
        open={startOpen}
        date={start}
        onConfirm={(date) => {
          setStartOpen(false)
          setStart(date)
        }}
        onCancel={() => {
          setStartOpen(false)
        }}
      />
      <DatePicker
        modal
        mode="time"
        open={endOpen}
        date={end}
        onConfirm={(date) => {
          setEndOpen(false)
          setEnd(date)
        }}
        onCancel={() => {
          setEndOpen(false)
        }}
      />
      <Button title='다음' onPress={() => navigation.navigate('SetupHoliday')}/>
    </View>
  );
};

export default SetupTime;
