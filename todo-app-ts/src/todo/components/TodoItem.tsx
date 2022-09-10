import { useTodos } from '../hooks/useTodos';
import { TODO } from '../interfaces/interfaces';

interface TodoItemProp {
  todo: TODO;
}

export const TodoItem = ({ todo }: TodoItemProp) => {
  const { toggleTodo } = useTodos();

  const handleDoubleClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: `${todo.completed && 'line-through'}`,
      }}
    >
      <h4 onDoubleClick={handleDoubleClick}>{todo.desc}</h4>
    </li>
  );
};
