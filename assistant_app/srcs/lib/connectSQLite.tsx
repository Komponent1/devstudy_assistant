import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true);

const connectSQLite = async () => {
  const db = await SQLite.openDatabase(
    { name: 'test.db' },
  );
  return db;
};

export default connectSQLite;
