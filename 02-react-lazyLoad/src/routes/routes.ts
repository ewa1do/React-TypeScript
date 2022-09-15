// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
import { routesNested } from '../01-lazyload/router/routes';

type JSXComponent = () => JSX.Element;

export interface RouteType {
  path: string;
  name: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  children?: Array<RouteType>;
}

const LazyPage1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Array<RouteType> = [
  {
    path: 'lazyload',
    component: lazy(() => import('../01-lazyload/layout/LazyLayout')),
    name: 'LazyLoading Nested',
    children: routesNested,
  },
  {
    path: '/no-lazy',
    component: NoLazy,
    name: 'No Lazy Loading',
  },

  // {
  //   path: '/lazy1',
  //   component: LazyPage1,
  //   name: 'LazyPage-1',
  // },
  // {
  //   path: '/lazy2',
  //   component: LazyPage2,
  //   name: 'LazyPage-2',
  // },
  // {
  //   path: '/lazy3',
  //   component: LazyPage3,
  //   name: 'LazyPage-3',
  // },
];
