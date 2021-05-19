import React from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import Comment from './Coments';
import Author from './Author';
import AddComment from './AddComment';

const Post = props => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Author email={props.email} nickname={props.nickname} />
      <Comment comments={props.comments} />
      <AddComment />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.7,
  },
});

export default Post;
