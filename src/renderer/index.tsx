import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

// Apply roboto-font
const font = document.createElement('link');
font.href =
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
font.rel = 'stylesheet';
document.head.appendChild(font);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);
