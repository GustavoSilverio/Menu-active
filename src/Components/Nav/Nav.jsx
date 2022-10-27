import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    return (
        <>
            <nav>
                <Link to="/"><h1 className="logo">"LOGO"</h1></Link>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projetos"><li>Projetos</li></Link>
                    <Link to="/empresa"><li>Empresa</li></Link>
                    <Link to="/contato"><li>Contato</li></Link>
                </ul>
            </nav>
        </>
    );
}

export default Nav;