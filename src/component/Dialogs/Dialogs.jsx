import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let messageElement = props.state.messages.map((m) => <Message message={m.message} />);

  let dialogElement = props.state.dialog.map((d) => <DialogItem name={d.name} id={d.id} />);
  debugger;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogElement}</div>
      <div className={s.messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
