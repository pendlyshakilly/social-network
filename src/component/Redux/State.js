import { rerenderEntireTree } from '../../render';

let state = {
  contentPage: {
    posts: [
      { id: 1, messagePost: 'hello my name illy', likeC: 12 },
      { id: 2, messagePost: 'hello my name dimich', likeC: 11 },
    ],
  },
  messagesPage: {
    dialog: [
      { id: 1, name: 'Dymich' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Svet' },
      { id: 4, name: 'Vlad' },
    ],
    messages: [
      { id: 1, message: 'yoyo' },
      { id: 2, message: 'hahaha' },
      { id: 3, message: 'hello' },
      { id: 4, message: 'goodbye' },
    ],
  },
};

export let addPost = (postMess) => {
  let newPost = {
    id: 5,
    messagePost: postMess,
    likeC: 0,
  };
  state.contentPage.posts.push(newPost);
  rerenderEntireTree(state);
};
export default state;
