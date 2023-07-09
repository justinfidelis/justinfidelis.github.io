import React from 'react';

const HamburgerIcon = (props) => {
    return (
        <div id="navbar-toggler">
            <svg height="30" width="30">
                <path
                    stroke={props.isHover ? "#aaaaaa" : "#cccccc"}
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M4 7h22M4 15h22M4 23h22" />
            </svg>
        </div>
    );
}

export default HamburgerIcon;