import React from 'react';
import {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './TodoInput.styles';
const TodoInput = ({setTodos, todos}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeText = e => {
    setInputValue(e);
  };
  const handleSubmit = () => {
    if (inputValue === '') {
      return Alert.alert('Boş bir görev giremezsiniz');
    }
    setTodos([...todos, {id: Date.now(), name: inputValue, isActive: true}]);

    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.todoInput}
        placeholderTextColor="white"
        placeholder="Yapılacak bir görev ekle"
        value={inputValue}
        onChangeText={e => handleChangeText(e)}
      />
      <TouchableOpacity
        style={inputValue === '' ? styles.buttonDisabled : styles.button}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;
