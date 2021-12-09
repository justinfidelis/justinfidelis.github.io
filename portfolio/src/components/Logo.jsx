import React, {useState} from 'react';

const Logo = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <a id="header-logo" href="." onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <svg height = "50" width = "50">
            <g
            id="g852"
            transform="matrix(1.9,0,0,1.9,-6.5,-7.8)"
            >
            <path
                id="path928"
                fill={isHover ? "#ffffff" : "none"}
                fillOpacity="0.15"
                stroke="#ffffff"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                strokeDasharray="none"
                strokeOpacity="1"
                d="M 16.252976,29.697918 5.4276562,23.447917 V 10.947916 L 16.252976,4.6979154 27.078296,10.947914 v 12.500003 z" />
            <path
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeDasharray="none"
                strokeOpacity="1"
                d="m 12.262096,11.881168 v 7 0 c 0,1.656855 -1.119288,3.000001 -2.5,3.000001"
                id="path839-9-3-0-5-6-9" />
            <path
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeDasharray="none"
                strokeOpacity="1"
                d="m 16.641262,14.852002 v 6.5"
                id="path1321-3-3-6" />
            <path
                id="path1321-4-2-7-4"
                d="m 21.932929,14.852002 v 6.5"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeDasharray="none"
                strokeOpacity="1" />
            <path
                id="path1321-3-1-0-1"
                d="m 19.287095,18.852002 v 2.5"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeDasharray="none"
                strokeOpacity="1" />
            </g>
        </svg>
    </a>
    );
}

export default Logo;