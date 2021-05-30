import React from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import Comment from './Coments';
import Author from './Author';
import AddComment from './AddComment';
import {connect} from 'react-redux';

const Post = props => {
  let image = props.image.body
    ? 'data:image/png;base64,' + props.image.body
    : null;

  return (
    <View style={styles.container}>
      <Image
        /*source={{uri: image}}*/
        source={props.image}
        style={styles.image}
      />
      <Author email={props.email} nickname={props.nickname} />
      {props.comments && <Comment comments={props.comments} />}
      {props.name && <AddComment postId={props.id} />}
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

const mapStateToProps = state => ({
  name: state.user.name,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
