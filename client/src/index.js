import React from 'react';
import ReactDOM from 'react-dom';
import style from "./stylesheet/index.css";
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); 

