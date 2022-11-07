import React from 'react';

import './SideMenu.css';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <>
            <div className="sideMenu">
                <ul className='sideList'>
                    <Link to="/"><li>Home</li></Link>
                    <span></span>
                    <Link to="/projetos"><li>Projetos</li></Link>
                    <span></span>
                    <Link to="/empresa"><li>Empresa</li></Link>
                    <span></span>
                    <Link to="/contato"><li>Contato</li></Link>
                </ul>
            </div>
        </>
    );
}

export default SideMenu;