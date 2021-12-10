import React, {useState} from 'react';

const LinkedInLogo = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <a className="contact-logo-container" href="https://www.linkedin.com/in/justin-wong-3732151b4/" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <svg height = "70" width = "70">
                <g transform="matrix(0.9,0,0,0.9,2,2)">
                <path
                d="M 9.099992,0.5 C 4.3503494,0.50000409 0.50000425,4.3503491 0.5,9.0999917 c 3.37e-6,4.7496433 3.8503488,8.5999893 8.599992,8.5999933 4.749643,-5e-6 8.599988,-3.85035 8.599991,-8.5999933 C 17.699979,4.3503495 13.849634,0.50000464 9.099992,0.5 Z m 45.540372,22.540742 c -10.807681,0.05892 -14.279247,7.572819 -14.399638,7.869804 -0.04756,-0.0059 -0.09416,-0.01869 -0.14056,-0.03462 V 24.200361 H 25.800265 V 72.000027 H 40.100166 40.73837 V 46.092049 c 0.235368,-3.356316 1.070044,-8.879875 6.366021,-9.768914 5.510535,-0.925058 9.65291,0.252611 10.195758,9.737391 v 25.939501 h 14.80013 c -5.9e-5,-8.846201 0,-18.648614 0,-26.9999 -0.314849,-1.753931 1.51808,-19.31066 -13.138731,-21.616771 -1.555924,-0.244808 -2.993924,-0.34985 -4.321184,-0.342614 z M 1.600192,24.200361 V 72.000027 H 16.600309 V 24.200361 Z"
                fill="none"
                fill-opacity="1"
                stroke={isHover ? "#39E5D1" : "#ffffff"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="4"
                stroke-dasharray="none"
                id="path3214" />
                </g>
            </svg>
        </a>
    );
}

export default LinkedInLogo;