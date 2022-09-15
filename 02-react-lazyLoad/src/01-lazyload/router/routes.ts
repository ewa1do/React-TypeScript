import { RouteType } from '../../routes/routes';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const routesNested: Array<RouteType> = [
  {
    path: 'lazy1',
    component: LazyPage1,
    name: 'Lazy Page 1',
  },
  {
    path: 'lazy2',
    component: LazyPage2,
    name: 'Lazy Page 2',
  },
  {
    path: 'lazy3',
    component: LazyPage3,
    name: 'Lazy Page 3',
  },
];
