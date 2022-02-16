import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'




const DialogItem = (props) => {
    let path= "/dialogs/" + props.id;
 
    return <div className={s.dialog + ' ' +  s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
  
}



const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    
    let dialogData = [
    {id: 1, name: 'Dymich'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Svet'},
    {id: 4, name: 'Vlad'}
    ]
    
    let messageData = [
        {id: 1, message: 'yoyo'},
        {id: 2, message: 'hahaha'},
        {id: 3, message: 'hello'},
        {id: 4, message: 'goodbye'}
    ]
    
    
    return (
        <div className={s.dialogs}> 
            <div className={s.dialogItem}>
                     <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                     <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
            </div>
            <div className={s.messages}>
                 <Message message={messageData[0].message}/>
                 <Message message={messageData[1].message}/>
                 
            </div>
        </div>
    );
}

export default Dialogs;