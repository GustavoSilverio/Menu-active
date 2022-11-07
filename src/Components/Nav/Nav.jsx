import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr'
import { useState } from 'react';
import SideMenu from '../SideMenu/SideMenu';


const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const iconeFechado = <GrClose className='iconeAberto' onClick={() => setToggleMenu(!toggleMenu)} />;
    const iconeAberto = <AiOutlineMenu className='iconeFechado' onClick={() => setToggleMenu(!toggleMenu)} />;

    return (
        <>
            <nav>
                <Link to="/"><h1 className="logo">"LOGO"</h1></Link>

                {toggleMenu ? iconeFechado : iconeAberto}

                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projetos"><li>Projetos</li></Link>
                    <Link to="/empresa"><li>Empresa</li></Link>
                    <Link to="/contato"><li>Contato</li></Link>
                </ul>
            </nav>

            {toggleMenu && <SideMenu />}
        </>
    );
}

export default Nav;