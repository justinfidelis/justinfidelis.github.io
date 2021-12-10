import React, {useState, useEffect} from 'react';
import MainLogo from './MainLogo';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        console.log("useeffect triggered");

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
    <div id="header" style={{top: visible ? "0" : "-68px"}}>
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