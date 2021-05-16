import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

const postsMock = [
  {
    id: Math.random(),
    nickname: 'Rafael Pereira Filho',
    email: 'rafaelprrflh@gmail.com',
    image: require('../../assets/imgs/fence.jpg'),
    comments: [
      {
        id: Math.random(),
        nickname: 'John Ray Sheldon',
        comment: 'Stunning!',
      },
      {
        id: Math.random(),
        nickname: 'Ana Julia Arruda',
        comment: 'Foto linda! Onde foi tirada?',
      },
    ],
  },
  {
    id: Math.random(),
    nickname: 'Francisco Leandro Lima',
    email: 'fllima@gmail.com',
    image: require('../../assets/imgs/bw.jpg'),
    comments: [],
  },
];

const Feed = () => {
  // const [posts, setPosts] = useState(postsMock);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={postsMock}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return <Post key={item.id} {...item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Feed;
