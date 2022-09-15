import { Link, Routes, Route, Outlet } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { routesNested } from './routes';

export const Navigation = () => {
  return (
    <>
      <h2>LazyLayout Pages</h2>

      <ul>
        {routesNested.map(({ path, name }) => {
          return (
            <li key={uuid()}>
              <Link to={`${path}`}> {name} </Link>
            </li>
          );
        })}
      </ul>

      <Routes>
        {routesNested.map(({ path, component: Component }) => {
          return (
            <Route
              key={uuid()}
              path={path}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </>
  );
};
