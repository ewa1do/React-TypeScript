import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  miliseconds: number;
};

export const Timer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);

  const ref = useRef<number>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, miliseconds);
  }, [miliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};
