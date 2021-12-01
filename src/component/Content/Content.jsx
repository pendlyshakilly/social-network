import react from 'react';
import s from './Content.module.css'
import Mypost from './Mypost/Mypost';



const Content = () => {
    return (
      <div>
        <div className={s.content}>
          <img src='https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg'></img>     
        </div>
        <div>
          <Mypost/>
        </div>
      </div>
      );
    }

export default Content;