import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  let messageElement = props.state.messages.map((m) => <Message message={m.message} />);

  let dialogElement = props.state.dialog.map((d) => <DialogItem name={d.name} id={d.id} />);

  let newMessElement = React.createRef();

  let addMess = () => {
    let message = newMessElement.current.value;
    alert(message);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div>
          <textarea ref={newMessElement}></textarea>
        </div>
        <div>
          <button onClick={addMess}>add massege</button>
        </div>
        <div className={s.dialogItem}>{dialogElement}</div>
        <div className={s.messages}>{messageElement}</div>
      </div>
    </div>
  );
};

export default Dialogs;
