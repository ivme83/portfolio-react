import React from 'react';

const About = React.lazy(() => import('./scenes/About/index'));

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About,
    }
];

export default routes;