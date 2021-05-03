import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

const Comments = props => {
  const renderComment = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.nickname}>{item.nickname}: </Text>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.comments}
        keyExtractor={item => item.id}
        renderItem={renderComment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444',
  },
  comment: {
    color: '#555',
  },
});

export default Comments;
