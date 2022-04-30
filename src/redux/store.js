import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
  _state: {
    profilePage: {
      posts: [{
          id: 1,
          message: "My first post",
          like: 5
        },
        {
          id: 2,
          message: "Hello, how are you?",
          like: 13
        },
    
      ],
      newPostsText: 'Enter text'
    },

    massagesPage: {
      massages: [{
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
      newMassageText: ''
    },

    navbar: {
      friends: [{
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
      ]
    }

  },
  _callSubscriber() {
    console.log('callSubscriber')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.massagesPage = dialogsReducer(this._state.massagesPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.navbar = profileReducer(this._state.navbar, action);
    this._callSubscriber(this._state);
  }
}

window.massage = store._state.massagesPage
window.store = store;
export default store;