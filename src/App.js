import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header/Header';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
const App = () => {
  const [todos, setTodos] = useState([
    {id: '1', name: 'Çöpler Atılacak', isActive: true},
    {id: '2', name: 'Ev Temizlenecek', isActive: false},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoInput setTodos={setTodos} todos={todos} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginBottom: 70,
    marginLeft: 10,
    marginRight: 10,
  },
});
