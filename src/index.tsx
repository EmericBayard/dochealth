import React from 'react';
import ReactDOM from 'react-dom';
import './core-ui/index.css';
// import App from './components/App/App';
import reportWebVitals from './core-ux/reportWebVitals';
import Welcome from './components/Welcome/Welcome';
import WorkContent from './components/WorkContent/WorkContent';
import Aboutme from './components/Aboutme/Aboutme';
// Import the functions you need from the SDKs you need

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
    <WorkContent />
    <Aboutme />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
