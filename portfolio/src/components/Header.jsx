import React from 'react';
import MainLogo from './MainLogo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header() {
    return (
        <Navbar className="bg-dark navbar-dark px-2 py-1 fixed-top" expand="md" collapseOnSelect>
            <Navbar.Brand className="ms-0" href=".">
                <MainLogo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Header;