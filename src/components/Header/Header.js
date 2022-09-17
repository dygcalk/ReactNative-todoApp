import React from 'react';
import {Text, View} from 'react-native';
import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.activeTodo}>0</Text>
    </View>
  );
};

export default Header;
