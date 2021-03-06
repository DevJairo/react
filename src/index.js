import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.css';
import './assets/css/app.css';
import App from './App.js';

// import './assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js'
// import './assets/js/bootstrap.bundle.min.js'
// import './assets/js/main.js'

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals