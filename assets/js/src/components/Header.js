import React, { useEffect, useState, useRef } from 'react';
import './Header.scss';
import LogoWhite from '../../../img/logo_white_test.svg'; 
import MenuIcon from '../../../img/menu_icon.svg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); 
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; 
            setIsScrolled(scrollTop > 0); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll); 
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    const scrollToContact = () => {
        const contactSection = document.getElementById('kontakt');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    useEffect(() => {
        const handleClickOutside = (event) => {
            
            if (
                menuRef.current && 
                !menuRef.current.contains(event.target) && 
                buttonRef.current && 
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        
    }, [isMenuOpen]);

    return (
        <header className={`header ${isScrolled ? 'header--fixed' : ''}`}>
            <div className="header-container">
                <div className='header-logo'><LogoWhite /></div>
                <div 
                    className="menu-icon" 
                    onClick={toggleMenu}
                    ref={buttonRef}
                ><MenuIcon /> 
                </div>
                <nav ref={menuRef} className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
                    <ul>
                        <li style={{ animationDelay: '1.0s' }}><a href="/" data-replace="Home"><span>Home</span></a></li>
                        <li style={{ animationDelay: '1.4s' }}><a href="/strony-internetowe-www" data-replace="Strony internetowe"><span>Strony WWW</span></a></li>
                        <li style={{ animationDelay: '1.8s' }}><a href="/sklepy-internetowe" data-replace="Sklepy internetowe"><span>Sklepy</span></a></li>
                        <li style={{ animationDelay: '2.2s' }}><a href="/comarch-e-sklep" data-replace="Comarch e-sklep"><span>Comarch e-sklep</span></a></li>
                        <li style={{ animationDelay: '2.6s' }}><a href="/rozbudowa-stron" data-replace="Rozbudowa stron"><span>Rozbudowa stron</span></a></li>
                    </ul>
                    <button className='btn-header' onClick={scrollToContact}>Kontakt</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
