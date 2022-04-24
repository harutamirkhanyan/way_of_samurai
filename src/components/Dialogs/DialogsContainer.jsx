import React from "react";
import { connect } from "react-redux";
import StoreContext from "../../StoreContext111";
import {
  sendMessageActionCreator,
  uptadeMessageActionCreator,
} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let messagesPage = store.getState().messagesPage;
//         // let sendMessage = () => {
//         //   store.dispatch(sendMessageActionCreator());
//         // };
//         // let onMessageChange = (val) => {
//         //   store.dispatch(uptadeMessageActionCreator(val));
//         // };
//         return (
//           <Dialogs
//             onMessageChange={onMessageChange}
//             sendMessage={sendMessage}
//             messagesPage={messagesPage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps=(state)=>{
  console.log(state, 'state')
  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps=(dispatch)=>{
return  {
  onMessageChange: (val)=>{
    dispatch(sendMessageActionCreator(val));
  },
  sendMessage: ()=>{
    dispatch(uptadeMessageActionCreator())
  }
}
}

// console.log(mapStateToProps())

const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
