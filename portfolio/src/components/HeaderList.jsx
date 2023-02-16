import React, {useState} from 'react';

const HeaderList = (props) => {
    const [hoverIndex, setHoverIndex] = useState(-1);

    return (
        <ul id={props.mode === "horizontal" ? "header-list-horizontal" : "header-list-vertical"}>
            <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
                <a
                    className="header-list-item-link"
                    href="#about"
                    onMouseOver={() => setHoverIndex(0)}
                    onMouseOut={() => setHoverIndex(-1)}
                    style={{
                        color: hoverIndex === 0 ? "#CCCCCC" : "white",
                    }}
                >
                    About
                </a>
            </li>
            <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
                <a
                    className="header-list-item-link"
                    href="#skills"
                    onMouseOver={() => setHoverIndex(1)}
                    onMouseOut={() => setHoverIndex(-1)}
                    style={{
                        color: hoverIndex === 1 ? "#CCCCCC" : "white",
                    }}
                >
                    Skills
                </a>
            </li>
            <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
                <a
                    className="header-list-item-link"
                    href="#education"
                    onMouseOver={() => setHoverIndex(2)}
                    onMouseOut={() => setHoverIndex(-1)}
                    style={{
                        color: hoverIndex === 2 ? "#CCCCCC" : "white",
                    }}
                >
                    Education
                </a>
            </li>
            <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
                <a
                    className="header-list-item-link"
                    href="#experience"
                    onMouseOver={() => setHoverIndex(3)}
                    onMouseOut={() => setHoverIndex(-1)}
                    style={{
                        color: hoverIndex === 3 ? "#CCCCCC" : "white",
                    }}
                >
                    Experience
                </a>
            </li>
            <li id={props.mode === "horizontal" ? "header-list-item-horizontal" : "header-list-item-vertical"}>
                <a 
                    className="header-list-item-link"
                    href="#contact"
                    onMouseOver={() => setHoverIndex(4)}
                    onMouseOut={() => setHoverIndex(-1)}
                    style={{
                        color: hoverIndex === 4 ? "#CCCCCC" : "white",
                    }}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default HeaderList;