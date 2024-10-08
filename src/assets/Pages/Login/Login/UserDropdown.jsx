import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserDropdown.css';

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <FontAwesomeIcon
        icon={faUser}
        className="user-icon"
        onClick={toggleDropdown}
      />

      {dropdownOpen && (
        <div className="dropdown-content">
          <ul>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Check Order/Initiate Return</li>
            <li>Language</li>
            <li><button>LOGIN</button></li>
            <li><button>REGISTER HERE</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
