import { createContext } from 'react';
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: number) => void;
};

// prettier-ignore
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
