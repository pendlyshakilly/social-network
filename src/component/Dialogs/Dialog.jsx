import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
let dialog = [
    
      {id: 1, name: 'Dymich'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Svet'},
      {id: 4, name: 'Vlad'}
]
    


let message = [
 
        {id: 1, message: 'yoyo'},
        {id: 2, message: 'hahaha'},
        {id: 3, message: 'hello'},
        {id: 4, message: 'goodbye'}
]
     



 let messageElement = message.map(m => <Message message={m.message}/>)
 
 let dialogElement = dialog.map(d => <DialogItem name={d.name} id={d.id}/> )




   return (
        <div className={s.dialogs}> 
            <div className={s.dialogItem}>
            {dialogElement}
            </div>
            <div className={s.messages}>
           {messageElement}  
            </div>
        </div>
    );
}

export default Dialogs;