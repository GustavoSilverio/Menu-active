import React from 'react';

import './Nav.css';

const Nav = () => {

    return (
        <>
            <nav>
                <h1 className="logo"><a href="#top">"LOGO"</a></h1>
                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#top">Projects</a></li>
                    <li><a href="#top">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;