export function addTodo(todo) {
  window.todosCollection.add(todo, { silent: true });
  return addTodoNoSync(todo);
}

export function addTodoNoSync(todo) {
  return {
    type: 'ADD_TODO',
    todo
  };
}
