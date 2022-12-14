import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img
            src={logo}
            alt='React Logo'
          />
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/users'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path='/about'
            element={<h1>About</h1>}
          />
          <Route
            path='/users'
            element={<h1>Users</h1>}
          />

          <Route
            path='/'
            element={<ShoppingPage />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
