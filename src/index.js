import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, mess: 'hello my name illy', likeC: 12 },
  { id: 2, mess: 'hello my name dimich', likeC: 11 },
];

let dialog = [
  { id: 1, name: 'Dymich' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Svet' },
  { id: 4, name: 'Vlad' },
];

let messages = [
  { id: 1, message: 'yoyo' },
  { id: 2, message: 'hahaha' },
  { id: 3, message: 'hello' },
  { id: 4, message: 'goodbye' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialog={dialog} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
