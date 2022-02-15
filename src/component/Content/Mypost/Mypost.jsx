import styles from './Mypost.module.css'
import Post from './Post/Post';



const Mypost = () => {
    
    let messageData = [
        {id: 1, mess: 'hello my name illy', likeC:12},
        {id: 2, mess: 'hello my name dimich', likeC:11},
    ]
    
    
    
    return <div>      
    <div className={styles.item}>
        <div>My post</div>
        <div>ava + destription</div>
        <textarea></textarea>
        <button>add post</button>
        <Post massege={messageData[0].mess} like={messageData[0].likeC}/>
        <Post massege={messageData[0].mess} like={messageData[0].likeC}/>        
        </div>
    </div>
        
}

export default Mypost;