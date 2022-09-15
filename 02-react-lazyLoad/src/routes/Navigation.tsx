import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate, Outlet } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { routes } from './routes';
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img
              src={logo}
              alt='React Logo'
            />
            <ul>
              {routes.map(({ path, name }) => {
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, component: Component, children }) => (
              <Route
                key={uuid()}
                path={path}
                element={<Component />}
              >
                {children &&
                  children.map(({ path, component: Component }) => {
                    return (
                      <Route
                        key={uuid()}
                        path={path}
                        element={<Component />}
                      />
                    );
                  })}
              </Route>
            ))}

            <Route
              path='/*'
              element={
                <Navigate
                  to={routes[0].path}
                  replace
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
