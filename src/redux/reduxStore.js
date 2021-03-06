import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './userReducer';
import authReducer from './authReducer';
import thunkMiddleware  from 'redux-thunk';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;