import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';

const Comments = ({comments}) => {
  const renderComment = ({item}) => {
    return (
      <View key={item.id} style={styles.commentContainer}>
        <Text style={styles.nickname}>{item.nickname}: </Text>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
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
    backgroundColor: 'green',
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

const mapStateToProps = state => ({
  comment: state.posts.posts,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
