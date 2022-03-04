import styles from './Mypost.module.css';
import Post from './Post/Post';

const Mypost = (props) => {
  let postsElement = props.posts.map((m) => <Post massege={m.mess} like={m.likeC} />);
  debugger;
  return (
    <div>
      <div className={styles.item}>
        <div>My post</div>
        <div>ava + destription</div>
        <textarea></textarea>
        <button>add post</button>
        {postsElement}
      </div>
    </div>
  );
};

export default Mypost;
