import { useReducer } from 'react';

interface initialTypes {
  counter: number;
}

const initialState: initialTypes = {
  counter: 10,
};

type ActionType =
  | { type: 'increment' | 'decrement' | 'reset' }
  | { type: 'custom'; payload: number };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'custom':
      return {
        ...state,
        counter: action.payload,
      };

    case 'reset':
      return { ...state, counter: initialState.counter };

    default:
      return state;
  }
};

export const CounterRed = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleCustom = () => {
    dispatch({ type: 'custom', payload: 100 });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button
        className='btn btn-outline-primary mx-2'
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary'
        onClick={handleDecrement}
      >
        -1
      </button>
      <button
        className='btn btn-outline-danger mx-2'
        onClick={handleCustom}
      >
        100
      </button>
      <button
        className='btn btn-outline-warning mx-2'
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
};
