import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="icons">
                <ul className='footer'>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaLinkedin />
                    </li>
                </ul>
            </div>
            <div className="sub"><span>Costs</span> &copy; 2022</div>
        </footer>
    );
}

export default Footer;