import { lazy } from 'react';
import { path } from './config/path';
import Page404 from './pages/404';
const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));
const Home = lazy(() => import('./pages/index'));

const routers = [
    {
        element: <DefaultLayout />,
        path: '/',
        children: [
            {
                path: path.Home,
                element: <Home />,
            },
            {
                path: '*',
                element: <Page404 />,
            },
        ],
    },
];

export default routers;
