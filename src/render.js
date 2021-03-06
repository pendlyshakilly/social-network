import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost } from './component/Redux/State';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
