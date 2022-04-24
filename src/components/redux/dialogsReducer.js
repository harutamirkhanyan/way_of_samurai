const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MAESSAGE = 'UPDATE-MAESSAGE';

let initalState={
    messages: [{
        id: 1,
        message: "hi"
      },
      {
        id: 2,
        message: "How are you?"
      },
      {
        id: 3,
        message: "Yo"
      },
      {
        id: 4,
        message: "Yo"
      },
      {
        id: 5,
        message: "Yo"
      },
    ],
    dialogs: [{
        id: 1,
        name: "Dimich"
      },
      {
        id: 2,
        name: "Andrey"
      },
      {
        id: 3,
        name: "Sveta"
      },
      {
        id: 4,
        name: "Sasha"
      },
      {
        id: 5,
        name: "Viktor"
      },
      {
        id: 6,
        name: "Valera"
      }
    ],
    newMessageText: ''
};

const dialogsReducer = (state=initalState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let newMessageObj = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessageObj);
            state.newMessageText = ('');
            return state
        case UPDATE_MAESSAGE:
            state.newMessageText = action.newMessage;
            return state
            default:
                return state
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
  });
  export const uptadeMessageActionCreator = (val) => ({
    type: UPDATE_MAESSAGE,
    newMessage: val
  });
  

export default dialogsReducer