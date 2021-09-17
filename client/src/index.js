import React from 'react';
import ReactDOM from 'react-dom';


import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {postreducer} from './reducer/postreducer'
import {authreducer} from './reducer/auth'
import './index.css';

import App from './App';

let reducer = combineReducers({
post:postreducer,  
auth:authreducer


})
let store = createStore(reducer, compose(applyMiddleware(thunk)))
ReactDOM.render(

<React.StrictMode >
   <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>,
document.getElementById('root'));