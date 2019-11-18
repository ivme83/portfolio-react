import React from 'react';

const About = React.lazy(() => import('./scenes/About/index'));
const Contact = React.lazy(() => import('./scenes/Contact/index'));
const Career = React.lazy(() => import('./scenes/Career/index'));
const Portfolio = React.lazy(() => import('./scenes/Portfolio/index'));

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
    {
        path: '/career',
        name: 'Career',
        component: Career,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
];

export default routes;