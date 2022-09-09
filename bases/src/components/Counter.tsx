import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (num: number): void => {
    setCounter((prev) => prev + num);
  };

  return (
    <div className='mt-5'>
      <h3>Counter</h3>
      <span>Valor: {counter}</span>
      <br />

      <button
        className='btn btn-outline-primary mt-2 mx-2'
        onClick={() => handleClick(1)}
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary mt-2'
        onClick={() => handleClick(2)}
      >
        +2
      </button>
      <button
        className='btn btn-outline-warning mt-2 mx-2'
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};
