import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/userActions';
const Profile = ({navigation, onLogout, email, name}) => {
  const logout = () => {
    onLogout();
    //dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Gravatar options={{email: email, secure: true}} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Pressable onPress={logout} style={styles.logoutButton}>
        <Text style={styles.textButton}>Sair</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logoutButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4286f4',
  },
  textButton: {
    alignSelf: 'center',
    color: '#FFF',
  },
  name: {
    fontSize: 30,
    color: 'gray',
  },
  email: {
    fontSize: 20,
    color: '#000',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});

const mapStateToProps = ({user}) => ({
  email: user.email,
  name: user.name,
});

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
