import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

const App = () => {
  const comments = [
    {
      id: 0,
      nickname: 'Maria rosário',
      comment: 'Dei like',
    },
    {
      id: 1,
      nickname: 'joãozinho',
      comment: 'first',
    },
  ];
  return (
    <View style={{flexGrow: 1, backgroundColor: 'white'}}>
      <Header />
      <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
    </View>
  );
};

export default App;
