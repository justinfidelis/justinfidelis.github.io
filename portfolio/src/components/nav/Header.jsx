import React, { useState } from 'react';
import MainLogo from './MainLogo';
import HamburgerIcon from './HamburgerIcon';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header() {
    const [isToggleHover, setIsToggleHover] = useState(false);
    return (
        <Navbar className="navbar-dark px-2 py-1 fixed-top" expand="md" collapseOnSelect={true}>
            <Navbar.Brand className="mx-0" href=".">
                <MainLogo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" onMouseEnter={() => setIsToggleHover(true)} onMouseLeave={() => setIsToggleHover(false)}>
                <HamburgerIcon isHover={isToggleHover}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Item>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#education">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Header;