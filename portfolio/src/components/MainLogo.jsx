import React, {useState} from 'react';

const MainLogo = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <a id="header-logo" href="." onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <svg height = "50" width = "50">
                <g id="g852" transform="matrix(1.8,0,0,1.8,-4.2,-5.8)">
                    <path
                        className="main-logo-path"
                        d="M 16.252976,29.697918 5.4276562,23.447917 V 10.947916 L 16.252976,4.6979154 27.078296,10.947914 v 12.500003 z"
                        stroke={isHover ? "#cccccc" : "#ffffff"}
                    />
                    <path
                        className="main-logo-path"
                        d="m 12.262096,11.881168 v 7 0 c 0,1.656855 -1.119288,3.000001 -2.5,3.000001"
                        stroke={isHover ? "#cccccc" : "#ffffff"}
                    />
                    <path
                        className="main-logo-path"
                        d="m 16.641262,14.852002 v 6.5"
                        stroke={isHover ? "#cccccc" : "#ffffff"}
                    />
                    <path
                        className="main-logo-path"
                        d="m 21.932929,14.852002 v 6.5"
                        stroke={isHover ? "#cccccc" : "#ffffff"}
                    />
                    <path
                        className="main-logo-path"
                        d="m 19.287095,18.852002 v 2.5"
                        stroke={isHover ? "#cccccc" : "#ffffff"}
                    />
                </g>
            </svg>
        </a>
    );
}

export default MainLogo;