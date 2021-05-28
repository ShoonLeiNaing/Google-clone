import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './reducer';
import {StateProvider} from './StateProvider'

ReactDOM.render(
  
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

