import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { connectSQLite } from '../lib';
import { todo, Todo } from '../model';

function Main() {
  const [list, setList] = useState<Todo[]>([]);

  const init = async () => {
    try {
      const db = await connectSQLite();
      await todo.createTable(db);
      const datas = await todo.getAll(db);
      setList(datas);
    } catch(err) {
      console.log(err);
    }
  }
  const add = async () => {
    try {
      const db = await connectSQLite();
      await todo.add(db, 'test');
      const datas = await todo.getAll(db);
      setList(datas);
    } catch(err) {
      console.log(err);
    }
  };
  const del = async () => {
    try {
      const db = await connectSQLite();
      await todo.delAll(db);
      const datas = await todo.getAll(db);
      setList(datas);
    } catch (err) {
      console.log(err);
    }
  }
  const update = async () => {
    try {
      const db = await connectSQLite();
      await todo.update(db, 'updated', list[list.length - 1].id);
      const datas = await todo.getAll(db);
      setList(datas);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <View>
      {list.map((to) => (
        <Text key={to.id}>{`${to.todo}${to.date}`}</Text>
      ))}
      <Button title='add' onPress={add} />
      <Button title='delete' onPress={del} />
      <Button title='update' onPress={update} />
    </View>
  )
};

export default Main;
