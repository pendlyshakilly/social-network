import f from './Post.module.css'



const Post = (props) => {
    return (
        <div className={f.item}>
        <img src='https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg' alt='user'></img>
        {props.massege}
        <div>
        <span>like</span> {props.like}
        </div>
        </div>
        );
    }


export default Post;