import React from 'react';
import { NavLink } from 'react-router-dom';

import portfolio_img from '../../assets/images/portfolio_img.jpg';

const SideBar = props => (
    <aside className="app-sidebar">
        <figure className="portfolio_img_holder">
            <img
                className="portfolio_img"
                src={portfolio_img}
                alt="self portrait"
            />
        </figure>
        <nav>
            <ul>
                <NavLink className="nav-link" to="/about">
                    <li className="nav-item">About</li>
                </NavLink>
                <NavLink className="nav-link" to="/career">
                    <li className="nav-item">Career</li>
                </NavLink>
                <NavLink className="nav-link" to="/portfolio">
                    <li className="nav-item">Portfolio</li>
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                    <li className="nav-item">Contact</li>
                </NavLink>
            </ul>
        </nav>
    </aside>
);

export default SideBar;
