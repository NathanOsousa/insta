import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import {connect} from 'react-redux';
import {getPosts} from '../redux/actions/post';

const Feed = ({post, dispatch}) => {
  const getPost = useCallback(() => {
    dispatch(getPosts);
  }, [dispatch]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={post}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => <Post key={item.id} {...item} />}
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

const mapStateToProps = state => ({
  post: state.posts.posts,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
