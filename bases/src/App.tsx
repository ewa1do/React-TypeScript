import { Counter } from './components/Counter';
import { CounterRed } from './components/CounterRed';
import { Formulario } from './components/Formulario';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter />
      <Usuario />
      <hr />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />
      <br />
      <h2>useReducer:</h2>
      <CounterRed />
      <hr />

      <h2>customHooks</h2>
      <hr />

      <Formulario />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
