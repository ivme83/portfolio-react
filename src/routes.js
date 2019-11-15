import React from 'react';

const About = React.lazy(() => import('./scenes/About/index'));
const Contact = React.lazy(() => import('./scenes/Contact/index'));

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
];

export default routes;