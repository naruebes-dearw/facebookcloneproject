import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './variables.css';
import App from './App';
import { UserProvider } from './contextAPI/UserProvider';
import { initialState, reducer } from './contextAPI/reducer';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider reducer={reducer} initialState={initialState}>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);