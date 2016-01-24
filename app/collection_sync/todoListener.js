import * as TodoActions from '../actions/todos.js';
import { bindActionCreators } from 'redux';


export default function() {
  const actions = bindActionCreators({ addTodoNoSync: TodoActions.addTodoNoSync }, window.store.dispatch);
  window.todosCollection.on('add', todo => {
    actions.addTodoNoSync(todo.toJSON());
  });
};
