import { SQLiteDatabase } from "react-native-sqlite-storage";
import 'react-native-get-random-values';
import { v4 } from 'uuid';

export type Todo = {
  id: string;
  todo: string;
  date: Date;
  compelete: boolean;
};
const createTable = async (db: SQLiteDatabase) => {
  const result = await db.executeSql(
    `CREATE TABLE IF NOT EXISTS todo (
      id      TEXT     NOT NULL  primary key,
      todo    TEXT     NOT NULL,
      date    DATE     NOT NULL,
      status  BOOLEAN  NOT NULL
    )`,
  )
  return result;
};
const add = async (db: SQLiteDatabase, content: string) => {
  const result = await db.executeSql(
    `INSERT INTO todo (
      id, todo, date, status
    ) VALUES (
      '${v4()}', '${content}', '${new Date()}', false 
    )`,
  );
  return result;
};
const getAll = async (db: SQLiteDatabase) => {
  const result = await db.executeSql(
    `SELECT * FROM todo`,
  );
  let datas = [];
  for (let i = 0; i < result[0].rows.length; i++) {
    datas.push(result[0].rows.item(i));
  }
  return datas;
};
const delAll = async (db: SQLiteDatabase) => {
  const result = await db.executeSql(
    `DELETE FROM todo`
  );
  return result;
};
const del = async (db: SQLiteDatabase, id: string) => {
  const result = await db.executeSql(
    `DELETE FROM todo WHERE id = '${id}'`
  );
  return result;
};
const update = async (db: SQLiteDatabase, content: string, id: string) => {
  const result = await db.executeSql(
    `UPDATE todo SET 
    todo = '${content}'
    WHERE id = '${id}'`
  );
  return result;
};

export default {
  createTable,
  add,
  update,
  getAll,
  del,
  delAll,
};
