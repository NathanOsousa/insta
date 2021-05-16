import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Pressable, Text} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../redux/actions/userActions';

const Login = ({navigation, onLogin}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('Temporário');

  const login = () => {
    onLogin({password, email, name});
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={email => setEmail(email)}
        placeholderTextColor="#000"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        style={styles.input}
        value={password}
        placeholderTextColor="#000"
      />
      <Pressable onPress={login} style={styles.buttom}>
        <Text style={styles.butonText}>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Register')}
        style={styles.buttom}>
        <Text style={styles.butonText}>Criar nova conta</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    width: '90%',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  butonText: {
    fontSize: 20,
    color: 'white',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
