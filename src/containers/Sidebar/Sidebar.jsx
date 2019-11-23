import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import portfolio_img from '../../assets/images/portfolio_img.jpg';

const SideBar = props => {
    return (
        <aside
            className={`app-sidebar ${props.minimize ? 'app-sidebar-minimized' : ''}`}
        >
            <figure className="portfolio_img_holder">
                <img
                    className="portfolio_img"
                    src={portfolio_img}
                    alt="self portrait of Roland Willis"
                />
                <figcaption>Self Portrait of Roland Willis</figcaption>
            </figure>
            <nav>
                <ul>
                    <NavLink className="nav-link" to="/about">
                        <li className="nav-item">
                            <FontAwesomeIcon
                                className="nav-icon"
                                icon={'address-card'}
                                fixedWidth
                            />
                            About
                        </li>
                    </NavLink>
                    <NavLink className="nav-link" to="/portfolio">
                        <li className="nav-item">
                            <FontAwesomeIcon
                                className="nav-icon"
                                icon={['fab', 'react']}
                                fixedWidth
                            />
                            Portfolio
                        </li>
                    </NavLink>
                    <NavLink className="nav-link" to="/career">
                        <li className="nav-item">
                            <FontAwesomeIcon
                                className="nav-icon"
                                icon={'book'}
                                fixedWidth
                            />
                            Career
                        </li>
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                        <li className="nav-item">
                            <FontAwesomeIcon
                                className="nav-icon"
                                icon={'address-book'}
                                fixedWidth
                            />
                            Contact
                        </li>
                    </NavLink>
                </ul>
            </nav>
            <footer>
                <button
                    className="footer_btn"
                    onClick={() => props.toggleMinimize()}
                >
                    <FontAwesomeIcon
                        className="min-icon"
                        icon={'angle-right'}
                        fixedWidth
                    />
                </button>
            </footer>
        </aside>
    );
};

export default SideBar;
