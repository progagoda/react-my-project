import React from "react";
import classes from './Dialogs.module.css';
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
        newMessageElement.current.value = "";
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }
    let dialogsElements = props.state.dialogsData.map((dialog) => (
        <DialogItems name={dialog.name} id={dialog.id} ava={dialog.avaLink} />));
    let messageElements = props.state.messagesData.map((message) => (<Message message={message.message} />));
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <textarea ref={newMessageElement} onChange={onMessageChange} />
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    );
}
export default Dialogs;