import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/others/cc_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import UserDropdown from '../Login/Login/UserDropdown';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const getClassName = ({ isActive }) =>
        `nav-link ${isActive ? 'active-link' : ''}`;

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <NavLink to="/" className='nav-link'>
                    <img src={logo} alt="Company Logo" className='navbar-logo' />
                </NavLink>
            </div>
            <button id='bar' className='navbar-toggler' onClick={toggleMenu} aria-label="Toggle Menu">
                &#9776;
            </button>
            <ul id='navbar' className={`navbar-right ${isMenuOpen ? 'show' : ''}`}>
                <button id='close' className={`navbar-close ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}>X</button>
                <li><NavLink to="/" className={getClassName} onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/shop" className={getClassName} onClick={closeMenu}>Shop</NavLink></li>
                <li><NavLink to="/blogs" className={getClassName} onClick={closeMenu}>Blogs</NavLink></li>
                <li><NavLink to="/about" className={getClassName} onClick={closeMenu}>About</NavLink></li>
                <li><NavLink to="/contact" className={getClassName} onClick={closeMenu}>Contact</NavLink></li>
                <li>
                    <NavLink to="/cart" className={getClassName} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </NavLink>
                </li>
                <li>
                    <UserDropdown />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
