import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Todo } from '../model';

type ListProps = {
  todos: Todo[];
  openEditor: (todo?: Todo) => void;
  deleteTodo: (id: string) => Promise<void>;
};
function List({
  todos,
  openEditor,
  deleteTodo,
}: ListProps) {
  return (
    <>
      {todos.map((todo) => (
        <TouchableOpacity
          key={todo.id}
          onPress={() => openEditor(todo)}
        >
          <Text style={styles.container}>{todo.todo}</Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => deleteTodo(todo.id)}
          >
            <Text style={styles.button}>X</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  button: {
    padding: 24,
  }
})
