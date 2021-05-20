import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import icon from '../../assets/imgs/icon.png';
import {Gravatar} from 'react-native-gravatar';
import {connect} from 'react-redux';
const Header = ({name, email}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Insta</Text>
      </View>
      <View style={styles.useContainer}>
        {email && (
          <Gravatar
            options={{email: email, secure: true}}
            style={styles.avatar}
          />
        )}
        <Text style={styles.userName}>{name ? name : 'Anônimo'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#BBB',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    fontSize: 28,
  },
  useContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userName: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 18,
    paddingLeft: 10,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 25,
  },
});

const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
