import React, {useState} from 'react';

const NavLogo = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div id="nav-logo-inner" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <svg height = "50" width = "50">
                <g transform="matrix(1.1,0,0,1.1,3.2,8.5)">
                    <path
                        id="path835"
                        d="M 5.9999995,6 H 34"
                        fill="none"
                        stroke={isHover ? "#CCCCCC" : "#ffffff"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeDasharray="none"
                        strokeOpacity="1" />
                    <path
                        d="M 5.9999998,15.999999 H 34"
                        id="path835-6"
                        fill="none"
                        stroke={isHover ? "#CCCCCC" : "#ffffff"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeDasharray="none"
                        strokeOpacity="1" />
                    <path
                        d="M 6,26 H 34"
                        id="path835-8"
                        fill="none"
                        stroke={isHover ? "#CCCCCC" : "#ffffff"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeDasharray="none"
                        strokeOpacity="1" />
                </g>
            </svg>
        </div>
    );
}

export default NavLogo;