import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CalProp from './Calendar';
import Users from './Users';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CalProp />, document.getElementById('cal'));
ReactDOM.render(<Users />, document.getElementById('users'));
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
