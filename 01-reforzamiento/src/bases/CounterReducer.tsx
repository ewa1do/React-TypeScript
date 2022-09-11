import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
        previous: state.counter,
      };

    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <h3>Counter: {counter}</h3>
      <h3>Previous Value: {previous}</h3>
      <h3>Changes: {changes}</h3>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button
        onClick={reset}
        style={{ margin: '0 5px' }}
      >
        Reset
      </button>
    </>
  );
};
