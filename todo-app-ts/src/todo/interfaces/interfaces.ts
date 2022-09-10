export interface TODO {
  id: number;
  desc: string;
  completed: boolean;
}

export interface TodoState {
  todoCount: number;
  todos: TODO[];
  completed: number;
  pending: number;
}
