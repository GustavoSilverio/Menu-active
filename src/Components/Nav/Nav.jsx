import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {

    return (
        <>
            <nav>
                <h1 className="logo">"LOGO"</h1>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;