import { useEffect, useState, useCallback, useRef } from 'react';
import { View, Button } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { connectSQLite } from '../lib';
import { todo, Todo } from '../model';
import { Input, List } from '../component';

function Main() {
  const [list, setList] = useState<Todo[]>([]);
  const [modifyTodo, setModifyTodo] = useState<Todo | undefined>(undefined);

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
  const addTodo = useCallback(async (text: string) => {
    try {
      const db = await connectSQLite();
      await todo.add(db, text);
      const datas = await todo.getAll(db);
      setList(datas);
    } catch(err) {
      console.log(err);
    }
  }, [setList, todo]);
  const deleteTodo = useCallback(async (id: string) => {
    try {
      const db = await connectSQLite();
      await todo.del(db, id);
      const datas = await todo.getAll(db);
      setList(datas);
    } catch (err) {
      console.log(err);
    }
  }, [setList, todo]);
  const updateTodo = useCallback(async (id: string, text: string) => {
    try {
      const db = await connectSQLite();
      await todo.update(db, text, id);
      const datas = await todo.getAll(db);
      setList(datas);
      setModifyTodo(undefined);
    } catch (err) {
      console.log(err);
    }
  },  [setList, todo]);
  useEffect(() => {
    init();
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const openEditor = useCallback((todo?: Todo) => {
    console.log(todo)
    if (todo) setModifyTodo(todo);
    bottomSheetModalRef.current?.present();
  }, [bottomSheetModalRef]);

  return (
    <View>
      <Button title='추가' onPress={() => openEditor()} />
      <List
        todos={list}
        openEditor={openEditor}
        deleteTodo={deleteTodo}
      />
      <Input
        addTodo={addTodo}
        updateTodo={updateTodo}
        initTodo={modifyTodo}
        ref={bottomSheetModalRef}
      />
    </View>
  );
};

export default Main;
