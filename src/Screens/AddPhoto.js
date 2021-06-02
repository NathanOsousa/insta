import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {addPost} from '../redux/actions/post';
import {connect} from 'react-redux';

const AddPhoto = ({dispatch, name, email, loading, navigation}) => {
  const [photo, setPhoto] = useState('');
  const [comment, setComment] = useState('');
  const noUser = 'Faça login para postar uma foto';

  const PickImage = () => {
    if (!name) {
      Alert.alert('Login', noUser);
    } else {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false,
        includeBase64: true,
      })
        .then(response => {
          setPhoto({body: response.data.toString()});
        })
        .catch(error => {
          console.log(
            '🚀 ~ file: AddPhoto.js ~ line 34 ~ PickImage ~ error',
            error,
          );
        });
    }
  };

  const save = async () => {
    Alert.alert('Imagem adicionada', comment);
    const data = {
      id: Math.random(),
      nickname: name,
      email,
      image: photo,
      comments: [
        {
          id: Math.random(),
          nickname: name,
          comment,
        },
      ],
    };
    dispatch(addPost(data));
  };

  useEffect(prevProps => {
    if (prevProps.loading && !loading) {
      setPhoto(null);
      setComment('');
      navigation.navigate('Feed');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Escolha uma Imagem</Text>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: `data:image/jpeg;base64,${photo.body}`}}
            style={styles.image}
          />
        </View>
        <TouchableOpacity onPress={PickImage} style={styles.button}>
          <Text style={styles.buttonText}>Escolha a foto</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="escreva um comentário"
          style={styles.input}
          value={comment}
          onChangeText={comment => setComment(comment)}
          placeholderTextColor="black"
          editable={name !== null}
        />
        <TouchableOpacity
          onPress={save}
          style={[styles.button, loading && styles.buttonDisabled]}
          disabled={loading}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  body: {
    flexShrink: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: Dimensions.get('window').height / 2,
    backgroundColor: '#EEE',
  },
  image: {
    height: Dimensions.get('window').height / 2,
    resizeMode: 'center',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#4286f4',
    borderRadius: 5,
  },
  buttonText: {
    padding: 10,
    color: '#FFF',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#000',
    alignSelf: 'center',
    color: '#000',
  },
  buttonDisabled: {
    backgroundColor: '#AAA',
  },
});

const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email,
  loading: state.posts.isUploading,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
