import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1.6,
    backgroundColor: '#36474F',
    borderRadius: 10,
    padding: 20,
  },
  todoInput: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonDisabled: {
    backgroundColor: '#808080',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
