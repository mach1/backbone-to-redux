import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todos from '../components/Todos.jsx';
import AddTodo from '../components/AddTodo.jsx';
import * as TodoActions from '../actions/todos.js';

class App extends React.Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Todos todos={todos} actions={actions} />
        <AddTodo onAdd={actions.addTodo}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
