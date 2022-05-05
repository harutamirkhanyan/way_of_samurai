import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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


  

//   let AuthRedirectComponent=withAuthRedirect(Dialogs)
 
// const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)



export default compose(connect(mapStateToProps, mapDispatchToProps),
withAuthRedirect
)(Dialogs);
