import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';  // Adjust CSS class naming convention if necessary
import logo from '../../images/others/cc_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <NavLink exact to="/" className='nav-link'>
                    <img src={logo} alt="Company Logo" className='navbar-logo' />
                </NavLink>
            </div>
            <button id='bar' className='navbar-toggler' onClick={toggleMenu} aria-label="Toggle Menu">
                &#9776;
            </button>
            <ul id='navbar' className={`navbar-right ${isMenuOpen ? 'show' : ''}`}>
                <button id='close' className={`navbar-close ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}>X</button>
                <li><NavLink exact className="nav-link" activeClassName="active-link" to="/" onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active-link" to="/shop" onClick={closeMenu}>Shop</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active-link" to="/blogs" onClick={closeMenu}>Blogs</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active-link" to="/about" onClick={closeMenu}>About</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active-link" to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                <li>
                    <NavLink className="nav-link cart-icon" activeClassName="active-link" to="/cart" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </NavLink>
                </li>
                <li><NavLink className="nav-link cart-icon" activeClassName="active-link" to="/login" onClick={closeMenu}><FontAwesomeIcon icon={faUser} /></NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;
