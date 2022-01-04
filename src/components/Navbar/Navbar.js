import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navbarContent = ['Home', 'Projects', 'Experience', 'Blogs', 'Contact'];
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <a href='#' className="navbar-brand">Vedant Nibandhe</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar nav ms-auto">
                            {
                                navbarContent.map(
                                    item => {
                                        return <li className="nav-item light">
                                            <Link to={item} spy={true}>
                                                <a href={"#".concat(item)} className="nav-link">
                                                    {item}
                                                </a>
                                            </Link>
                                        </li>
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;