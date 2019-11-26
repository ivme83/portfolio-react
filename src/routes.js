import React from 'react';

const Experience = React.lazy(() => import('./scenes/Experience/index'));
const Portfolio = React.lazy(() => import('./scenes/Portfolio/index'));
const Contact = React.lazy(() => import('./scenes/Contact/index'));

const routes = [
    {
        path: '/experience',
        name: 'Experience',
        component: Experience,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    
];

export default routes;