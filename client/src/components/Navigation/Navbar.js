import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import { useState, useEffect } from 'react';

function Navbar() {
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const changeNavBg = () => {
            if (window.scrollY >= 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        };
    }, []);

    return (
        <header
            id="navigation-bar"
            className={`${show ? 'show' : ''} ${scrolled ? 'white' : ''}`}
        >
            <div id="nav-title">
                <a href="#home" id="nav-title-link">
                    {'< Alpha />'}
                </a>
            </div>
            <div className="navbar-toggle" onClick={() => setShow(prev => !prev)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <nav className="nav">
                <a href="#services" className="nav-link">
                    Services
                </a>
                <a href="#projects" className="nav-link">
                    Projects
                </a>
                <a href="#aboutus" className="nav-link">
                    About Us
                </a>
                <a href="#admins" className="nav-link">
                    Admins
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
