import React, { useState } from 'react';

import './Nav.css';

const Nav = () => {

    const [isMenuActive, setMenuState] = useState(false)

    return (
        <>
            <nav>
                <h1 className='logo'>"LOGO"</h1>
                <ul className={isMenuActive ? 'active' : undefined}>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <button onClick={() => {
                    setMenuState(!isMenuActive)
                    console.log(isMenuActive)
                }}>Hello World !</button>
            </nav>
        </>
    );
}

export default Nav;