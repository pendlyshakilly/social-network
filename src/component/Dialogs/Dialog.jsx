import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    

 let messageElement = messages.map(m => <Message message={m.message}/>)
 
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