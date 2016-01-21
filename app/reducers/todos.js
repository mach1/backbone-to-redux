export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text
        },
        ...state
      ];
    default:
      return state;
  }
}
