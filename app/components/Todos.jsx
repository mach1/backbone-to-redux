import React from 'react';
import Todo from './Todo.jsx';

export default class Todos extends React.Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <ul>
        { 
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Todo todo={todo} />
              </li>
            );
          })
        }
      </ul>
    );
  }
}
