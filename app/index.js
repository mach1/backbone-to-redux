import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';

const store = configureStore();
window.store = store;

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('container'));
