import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import TodoCollection from './collections/todo-collection.js';
import todoListener from './collection_sync/todoListener.js';

const store = configureStore();
window.store = store;
window.todosCollection = new TodoCollection();
todoListener();

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('container'));
