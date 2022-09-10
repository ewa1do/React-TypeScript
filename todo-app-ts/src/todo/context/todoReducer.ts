import { TODO, TodoState } from '../interfaces/interfaces';

type TodoAction =
  | { type: 'addTodo'; payload: TODO }
  | { type: 'toggleTodo'; payload: { id: number } };

export const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
