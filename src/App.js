import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setMessage} from './redux/actions/message';
import Navigator from './Navigator';
import {Alert} from 'react-native';

const App = ({text, title}) => {
  useEffect(() => {
    if (text && text.toString().trim()) {
      Alert.alert(title || 'Mensagem', text.toString());
      dispatch(setMessage({title: '', text: ''}));
    }
  }, [text, title]);

  return <Navigator />;
};

const mapStateToProps = state => ({
  title: state.message.title,
  text: state.message.text,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
