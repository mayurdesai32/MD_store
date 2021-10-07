import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import Apps from './Apps';
import store from './reduxStore/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
      <Apps />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
