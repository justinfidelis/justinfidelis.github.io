import React from 'react';

const HeaderList = (props) => {

    return (
    <ul id={props.mode === "horizontal" ? "header-list-horizontal" : "header-list-vertical"}>
        <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
            <a className="header-list-item-link" href="#about">
                About
            </a>
        </li>
        <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
            <a className="header-list-item-link" href="#skills">
                Skills
            </a>
        </li>
        <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
            <a className="header-list-item-link" href="#education">
                Education
            </a>
        </li>
        <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
            <a className="header-list-item-link" href="#experience">
                Experience
            </a>
        </li>
        <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
            <a className="header-list-item-link" href="#contact">
                Contact
            </a>
        </li>
    </ul>
    );
}

export default HeaderList;