import styles from './Mypost.module.css';
import Post from './Post/Post';
import React from 'react';

const Mypost = (props) => {
  let postsElement = props.posts.map((m) => <Post massege={m.mess} like={m.likeC} />);

  let newPostElement = React.createRef();
  debugger;
  let addPosts = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <div className={styles.item}>
        <div>My post</div>
        <div>ava + destription</div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPosts}>add post</button>
        {postsElement}
      </div>
    </div>
  );
};

export default Mypost;
