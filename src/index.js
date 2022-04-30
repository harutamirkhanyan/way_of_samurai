import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import './index.css';

import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

let callSubscriber=(state)=>{
        root.render(
            <React.StrictMode>
                  <BrowserRouter>
              <Provider store={store} >
              <App/>
              </Provider>
                  </BrowserRouter>
            </React.StrictMode>
          );
    }

callSubscriber(store.getState())
reportWebVitals();
window.store=store;