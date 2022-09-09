import { useState } from 'react';
import { Timer } from './Timer';

export const TimerPadre = () => {
  const [miliseconds, setMiliseconds] = useState(1000);

  const setTimer = ({ target }: any) => {
    const timerProp = Number(target.textContent);

    if (isNaN(timerProp)) {
      console.log('The button value is not a valid type');
      return;
    }

    setMiliseconds(timerProp);
  };

  return (
    <>
      <span>Milisegundos: {miliseconds}</span>

      <br />

      <button
        className='btn btn-outline-success mx-2'
        onClick={setTimer}
      >
        1000
      </button>
      <button
        className='btn btn-outline-success'
        onClick={setTimer}
      >
        2000
      </button>

      <Timer miliseconds={miliseconds} />
    </>
  );
};
