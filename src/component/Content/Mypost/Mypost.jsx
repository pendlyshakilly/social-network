import styles from './Mypost.module.css'
import Post from './Post/Post';



const Mypost = () => {
    
    let message = [
        {id: 1, mess: 'hello my name illy', likeC:12},
        {id: 2, mess: 'hello my name dimich', likeC:11},
    ]
    
let messageElement = message.map
(m =><Post massege={m.mess} like={m.likeC}/>)
    
    return <div>      
    <div className={styles.item}>
        <div>My post</div>
        <div>ava + destription</div>
        <textarea></textarea>
        <button>add post</button>
        {messageElement}    
        </div>
    </div>
        
}

export default Mypost;