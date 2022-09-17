import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 9,
  },
  todoCard: {
    backgroundColor: '#7DA453',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  todoCardDeactive: {
    backgroundColor: '#36474F',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  todoDeactive: {
    color: 'lightgray',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
});
