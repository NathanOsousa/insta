import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {addComment} from '../redux/actions/comments';

const AddComment = ({name, dispatch}) => {
  const [comment, setComment] = useState('');
  const [toggleEditMode, setToggleEditMode] = useState(true);

  const handleAddComent = () => {
    const data = {
      id: Math.random(),
      nickname: name,
      comment,
    };

    dispatch(addComment(data));
  };

  return (
    <View style={styles.container}>
      {toggleEditMode ? (
        <View style={styles.container}>
          <TextInput
            placeholder="insira seu comentário"
            style={styles.input}
            value={comment}
            onChangeText={comment => setComment(comment)}
            onSubmitEditing={handleAddComent}
            placeholderTextColor="#555"
          />
          <TouchableOpacity onPress={() => setToggleEditMode(false)}>
            <Icon name="times" size={25} color="#555" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setToggleEditMode(true)}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color="#555" />
            <Text style={styles.caption}> Ensira seu comentário</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC',
  },
  input: {
    width: '90%',
    color: '#000',
  },
});

const mapStateToProps = state => ({
  name: state.user.name,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
