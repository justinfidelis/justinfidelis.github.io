import React, {useState} from 'react';

const EmailLogo = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <a className="contact-logo-container" href="mailto:justinfidelis@gmail.com" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <svg height = "70" width = "70">
                <g transform="matrix(0.9,0,0,0.9,-1.1,0)">
                    <path
                        id="path1602"
                        fill="none"
                        stroke={isHover ? "#39E5D1" : "#ffffff"}
                        stroke-width="2.2"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="4"
                        stroke-dasharray="none"
                        stroke-opacity="1"
                        d="M 7.6027863,17.344897 40.000003,44.529395 v 0 L 72.397221,17.344896" />
                    <path
                        id="path1689"
                        fill="none"
                        stroke={isHover ? "#39E5D1" : "#ffffff"}
                        stroke-width="2.2"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="4"
                        stroke-dasharray="none"
                        stroke-opacity="1"
                        d="M 34.601977,40.000088 7.6030299,62.654898" />
                    <path
                        id="path1686"
                        fill="none"
                        stroke={isHover ? "#39E5D1" : "#ffffff"}
                        stroke-width="2.2"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="4"
                        stroke-dasharray="none"
                        stroke-opacity="1"
                        d="M 45.398022,40.000088 72.39697,62.654898" />
                    <path
                        id="rect1426"
                        fill="none"
                        stroke={isHover ? "#39E5D1" : "#ffffff"}
                        stroke-width="2.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        stroke-dasharray="none"
                        stroke-opacity="1"
                        d="m 11,16 h 58 c 2.77,0 5,2.23 5,5 v 38 c 0,2.77 -2.23,5 -5,5 H 11 C 8.23,64 6,61.77 6,59 V 21 c 0,-2.77 2.23,-5 5,-5 z" />
                </g>
            </svg>
        </a>
    );
}

export default EmailLogo;