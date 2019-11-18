import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link className="nav-link" to="/about">
                    <li className="nav-item">About</li>
                </Link>
                <Link className="nav-link" to="/career">
                    <li className="nav-item">Career</li>
                </Link>
                <Link className="nav-link" to="/portfolio">
                    <li className="nav-item">Portfolio</li>
                </Link>
                <Link className="nav-link" to="/contact">
                    <li className="nav-item">Contact</li>
                </Link>
            </ul>
        </nav>
    </aside>
);

export default SideBar;
