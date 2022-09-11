import { useReducer } from 'react';
import { CounterState } from './interfaces';
import { counterReducer } from './state/counterReducer';
import * as actions from './actions/actions';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const increaseBy = (value: number) => dispatch(actions.doIncreaseBy(value));
  const reset = () => dispatch(actions.doReset());

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
