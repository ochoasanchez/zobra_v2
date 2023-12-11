import { useState } from 'react';
import NavbarLink from './NavbarLink';
import ZobraLogo from '../assets/zobra_text.svg';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full">
            <div className="lg:hidden flex flex-row p-4 justify-between">
                <div id="hamburger">
                    <button
                        onClick={toggleMenu}
                        className="border-none focus:outline-none bg-transparent p-0"
                    >
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div id="logo" className="text-black"><img src={ZobraLogo} className="cropped-svg"/></div>
                
                <div id="closeIcon">
                    <button
                        onClick={toggleMenu}
                        className="border-none focus:outline-none bg-transparent p-0  h-6 w-6"
                        disabled={!isMenuOpen}
                    >
                        {isMenuOpen &&
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>}
                    </button>
                </div>

            </div>
            <ul
                className={`lg:flex w-full justify-center items-center py-4 ${
                    isMenuOpen ? 'flex flex-col' : 'hidden'
                }`}
            >
                <NavbarLink name="Home" to="/" />
                <NavbarLink name="About us" to="/about-us" />
                <NavbarLink name="Vineyard" to="/vineyard" />
                <NavbarLink name="Contact" to="/contact" />
            </ul>
        </nav>
    );
};

export default Header;
