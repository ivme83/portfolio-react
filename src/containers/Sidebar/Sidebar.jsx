import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = props => (
    <aside className="app-sidebar">
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </aside>
);

export default SideBar;
