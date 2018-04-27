import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/main.scss';  //引入公共样式
import './modules/rem'   //rem buju
import { Provider } from 'react-redux'
import store from './store'


import {
    BrowserRouter as Router
} from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store = { store }>
            <Router>
                <App />
            </Router>
        </Provider>
 , document.getElementById('root'));
registerServiceWorker();
