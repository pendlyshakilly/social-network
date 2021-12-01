import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'




const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}> 
            <div className={styles.dialogsItem}>
                <div className={styles.dialog + ' ' +  styles.active}>
                    <NavLink to="/dialogs/1" className={styles.link}>Dimych</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/2" className={styles.link}>Andrey</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/3" className={styles.link}>Sveta</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/4" className={styles.link}>Vlad</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/5" className={styles.link}>Silvia</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/6" className={styles.link}>Denus</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                 <div className={styles.dialog}>Hi</div>
                 <div className={styles.dialog}>How are you</div>
                 <div className={styles.dialog}>Yo</div> 
            </div>
        </div>
    );
}

export default Dialogs;