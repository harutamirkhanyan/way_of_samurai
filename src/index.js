import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './components/redux/reduxStore';
import './index.css';
// import {Provider} from './StoreContext';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

let callSubscriber=(state)=>{
    // console.log(store.state)
        root.render(
            <React.StrictMode>
                  <BrowserRouter>
              <Provider store={store} >
              <App/>
              {/* <App state={state} store={store}   dispatch={store.dispatch.bind(store)}/> */}
              </Provider>
                  </BrowserRouter>
            </React.StrictMode>
          );
    }

callSubscriber(store.getState())
// store.subscribe(callSubscriber)
store.subscribe(()=>{
    let state=store.getState()
    callSubscriber(state)
})


reportWebVitals();
