import { NavLink } from 'react-router-dom';
import f from './Dialogs.module.css'




const Dialogs = (props) => {
    return (
         <div className={f.dialogs}> 
               <div className={f.dialogsItem}>
                    <div className={f.dialog + ' ' +  f.active}>
                    <NavLink to="/dialogs/1" className={f.link}>Dimych</NavLink>
                    </div>
                    <div className={f.dialog}>
                    <NavLink to="/dialogs/2" className={f.link}>Andrey</NavLink>
                    </div>
                    <div className={f.dialog}>
                    <NavLink to="/dialogs/3" className={f.link}>Sveta</NavLink>
                    </div>
                    <div className={f.dialog}>
                    <NavLink to="/dialogs/4" className={f.link}>Vlad</NavLink>
                    </div>
                    <div className={f.dialog}>
                    <NavLink to="/dialogs/5" className={f.link}>Silvia</NavLink>
                    </div>
                    <div className={f.dialog}>
                    <NavLink to="/dialogs/6" className={f.link}>Denus</NavLink>
                    </div>
               </div>
               <div className={f.messages}>
                 <div className={f.dialog}>Hi</div>
                 <div className={f.dialog}>How are you</div>
                 <div className={f.dialog}>Yo</div> 
             </div>
        </div>
        );
    }


export default Dialogs;