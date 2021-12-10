import React from 'react';
import MainLogo from './MainLogo';

const Header = () => {
    return (
    <div id="header">
        <div id="header-content">
            <MainLogo />
            <ul id="header-list">
                <li className="header-list-item">
                    <a className="header-list-item" href="#about">
                        About
                    </a>
                </li>
                <li className="header-list-item">
                    <a className="header-list-item" href="#skills">
                        Skills
                    </a>
                </li>
                <li className="header-list-item">
                    <a className="header-list-item" href="#education">
                        Education
                    </a>
                </li>
                <li className="header-list-item">
                    <a className="header-list-item" href="#experience">
                        Experience
                    </a>
                </li>
                <li className="header-list-item">
                    <a className="header-list-item" href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </div>
    );
}
 
export default Header;