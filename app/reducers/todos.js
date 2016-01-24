export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      const todo = action.todo;
      return [
        Object.assign({}, todo,
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          }
        ),
        ...state
      ];
    default:
      return state;
  }
}
