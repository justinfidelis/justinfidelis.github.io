import React from 'react';

const Header = () => {
    return (
    <div className="app-header">
        <div class="app-header-content">
            <a class="header-logo" href=".">
                <img class="header-logo" src="logobw50.png" alt=""></img>
            </a>
            <ul class="header-list">
                <li class="header-list-item">
                    <a class="header-list-item" href="#about">
                        About
                    </a>
                </li>
                <li class="header-list-item">
                    <a class="header-list-item" href="#about">
                        Skills
                    </a>
                </li>
                <li class="header-list-item">
                    <a class="header-list-item" href="#about">
                        Education
                    </a>
                </li>
                <li class="header-list-item">
                    <a class="header-list-item" href="#about">
                        Experience
                    </a>
                </li>
                <li class="header-list-item">
                    <a class="header-list-item" href="#about">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
        
        
    </div>
    );
}
 
export default Header;