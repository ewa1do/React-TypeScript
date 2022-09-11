import { useState } from 'react';

type CounterProps = {
  initialValue?: number;
};

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: CounterProps) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number = 1) => {
    setCounterState(({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };

  const resetCounter = () => {
    setCounterState({
      counter: initialValue,
      clicks: 0,
    });
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button
        onClick={resetCounter}
        style={{ marginLeft: '20px' }}
      >
        Reset
      </button>
      <h4>Clicks: {clicks}</h4>
    </>
  );
};
