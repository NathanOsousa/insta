import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Pressable, Text} from 'react-native';
import {connect} from 'react-redux';
import createUser from '../redux/actions/userActions';

const Register = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  useEffect(prevProps => {
    if (prevProps.loading && !isLoading) {
      setPassword('');
      setEmail('');
      setNome('');
      navigation.navigate('Feed');
    }
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        autoFocus={true}
        value={nome}
        onChangeText={nome => setNome(nome)}
        placeholderTextColor="#000"
      />
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
      <Pressable
        onPress={() => {
          dispatch(createUser({name: nome, email: email}));
        }}
        style={styles.buttom}>
        <Text style={styles.butonText}>Salvar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
  input: {
    marginTop: 20,
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    width: '90%',
    color: '#000',
  },
});

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
