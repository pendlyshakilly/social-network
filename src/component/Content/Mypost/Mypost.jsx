import s from './Mypost.module.css'
import Post from './Post/Post';



const Mypost = () => {
     return <div>      
        <div className={s.item}>
        <div>My post</div>
        <div>ava + destription</div>
        <textarea></textarea>
        <button>add post</button>
        <Post massege='hello my name illy'
         like='56'/>
        <Post massege='hello my name dimich'
         like='23'/>        
        </div>
        </div>
        
    }


export default Mypost;