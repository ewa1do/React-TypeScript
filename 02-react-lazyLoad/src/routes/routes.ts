import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface RouteType {
  path: string;
  name: string;
  component: JSXComponent;
  children?: Array<RouteType>;
}

export const routes: Array<RouteType> = [
  {
    path: '/lazy1',
    component: LazyPage1,
    name: 'LazyPage-1',
  },
  {
    path: '/lazy2',
    component: LazyPage2,
    name: 'LazyPage-2',
  },
  {
    path: '/lazy3',
    component: LazyPage3,
    name: 'LazyPage-3',
  },
];
