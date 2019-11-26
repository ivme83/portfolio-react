import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/Sketch_Block.ttf';
import './assets/fonts/GrutchShaded.ttf';
import './scss/main.scss';
import MainLayout from './containers/index.js';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWindowClose, faAngleRight, faStream, faAddressBook, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faWindowClose, faAngleRight, faStream, faAddressBook, faChalkboardTeacher);


ReactDOM.render(<MainLayout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
