import {ADD_POST} from '../constants/post';

const INITIAL_STATE = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Rafael Pereira Filho',
      email: 'rafaelprrflh@gmail.com',
      image: require('../../../assets/imgs/fence.jpg'),
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
      image: require('../../../assets/imgs/bw.jpg'),
      comments: [],
    },
  ],
};

const PostReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload,
        }),
      };

    default:
      return state;
  }
};

export default PostReducer;