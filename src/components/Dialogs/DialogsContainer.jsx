import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  uptadeMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps=(state)=>{
  return {
    messagesPage: state.messagesPage,
  }
}


let mapDispatchToProps=(dispatch)=>{
  return  {
    onMessageChange: (val)=>{
      dispatch(uptadeMessageActionCreator(val))

    },
    sendMessage: ()=>{
      dispatch(sendMessageActionCreator());
    }
  }
  }
const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
