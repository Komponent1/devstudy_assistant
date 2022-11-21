import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  score: number;
  holiday: number[];
  day_start: [number, number],
  day_end: [number, number],
}
const saveData = async (key: string, value: any) => {
  const user = await getUser();
  if (user === null) return console.log('inside error'); //TODO
  await AsyncStorage.setItem(
    'user',
    JSON.stringify({
      ...user,
      [key]: value,
    }),
  );
}
const getUser = async () => {
  const user = await AsyncStorage.getItem('user');
  if (user === null) return null;
  return JSON.parse(user);
};
const saveUser = async (user: User) => {
  await AsyncStorage.setItem(
    'user',
    JSON.stringify(user),
  );
}
const saveScore = async (score: number) => {
  await saveData('score', score);
}
const saveHoliday = async (holiday: number[]) => {
  await saveData('holiday', holiday);
}
const saveDate = async (
  day_start: [number, number],
  day_end: [number, number],
) => {
  const user = await getUser();
  if (user === null) return console.log('inside error'); //TODO
  await AsyncStorage.setItem(
    'user',
    JSON.stringify({
      ...user,
      day_start,
      day_end,
    }),
  );
}

export default {
  saveScore, saveHoliday, saveDate, getUser, saveUser,
};
