import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      {/* <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});

export default Login;
