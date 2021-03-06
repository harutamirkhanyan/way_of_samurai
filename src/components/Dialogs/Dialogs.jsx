import React from "react";
import Login from "../Login/Login";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.messagesPage.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  let newMessage = React.createRef();

  let sendMessage = () => {
      props.sendMessage()
  };

  let onMessageChange = () => {
    let val = newMessage.current.value;
    props.onMessageChange(val)
  };


if(!props.isAuth){ return <Login/>}

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        {messageElements}
        <textarea
          placeholder="Enter Your message"
          value={props.messagesPage.newMessageText}
          onChange={onMessageChange}
          ref={newMessage}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
  }








  // return (
  //   <div className={style.dialogs}>
  //     <div className={style.dialogsItems}>{dialogsElements}</div>
  //     <div className={style.messages}>
  //       {messageElements}
  //       <textarea
  //         placeholder="Enter Your message"
  //         value={props.messagesPage.newMessageText}
  //         onChange={onMessageChange}
  //         ref={newMessage}
  //       />
  //       <button onClick={sendMessage}>Send</button>
  //     </div>
  //   </div>
  // );
// };

export default Dialogs;
