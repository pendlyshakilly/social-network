import styles from './Content.module.css'
import Mypost from './Mypost/Mypost';


const Content = (props) => {
  return (
    
    <div>
      <div className={styles.content}>
        <img src='https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg' alt="content"></img>     
      </div>
      <div>
      
        <Mypost posts={props.posts}/>
      </div>
    </div>
  );
}

export default Content;