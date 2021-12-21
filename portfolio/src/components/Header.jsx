import React, {useState, useEffect} from 'react';
import MainLogo from './MainLogo';
import HeaderList from './HeaderList.jsx';
import NavLogo from './NavLogo.jsx';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const [horizontal, setHorizontal] = useState(true);
    const [collapse, setCollapse] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setVisible(!collapse || (currentScrollPos < prevScrollPos || currentScrollPos < 10));

            setPrevScrollPos(currentScrollPos);

            setCollapse(true)
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [collapse, prevScrollPos]);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth
            const isChanged = horizontal ? windowWidth < 660 : windowWidth >= 660;

            setHorizontal(windowWidth >= 660);
            setCollapse(horizontal ? true : isChanged ? true : collapse);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [horizontal, collapse]);

    useEffect(() => {
        setHorizontal(window.innerWidth >= 660);
        setCollapse(true);
    },[]);

    return (
    <div id="header" style={{top: visible ? "0" : "-67px"}}>
        <div id="header-content-container" style={{borderBottomWidth: collapse ? "0px" : "2px", transitionDelay: collapse ? "0.5s" : "0s"}}>
            <div id="header-content">
                <MainLogo />
                {horizontal ? <HeaderList mode="horizontal"/> : <button id="nav-logo-outer" onClick={() => setCollapse(!collapse)}><NavLogo /></button>}
            </div>
        </div>
        <div id="header-list-container" style={{height: collapse ? "0px" : "196px"}}> 
            <HeaderList mode="vertical"/>
        </div>
    </div>
    );
}
 
export default Header;