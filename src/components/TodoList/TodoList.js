import React from 'react';
import {Text, View} from 'react-native';
import styles from './TodoList.styles';

const TodoList = ({todos, setTodos}) => {
  const handleIsActive = id => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id) {
        todo.isActive = !todo.isActive;
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <View
          style={todo.isActive ? styles.todoCard : styles.todoCardDeactive}
          key={todo.id}>
          <Text
            onPress={() => handleIsActive(todo.id)}
            style={todo.isActive ? styles.todoText : styles.todoDeactive}>
            {todo.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TodoList;
