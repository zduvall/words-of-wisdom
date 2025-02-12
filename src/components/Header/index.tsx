import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { CloseIcon, HamburgerIcon } from './Icons';
import { DesktopNavLink, MobileNavLink } from './NavLinks';

export interface IHeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const MENU_ITEMS = [
  { title: 'Home', to: '/' },
  { title: 'Quotes', to: '/quotes' },
  { title: 'Test', to: '/test' },
];

const Header: React.FC<IHeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className='accent-background p-4 flex justify-between items-center relative'>
      {/* Logo / Site Title */}
      <div>
        <Link to='/' className='text-white text-xl font-bold'>
          Words of Wisdom
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex space-x-4 items-center'>
        {MENU_ITEMS.map((item) => (
          <DesktopNavLink key={item.to} item={item} />
        ))}
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </nav>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button
          onClick={toggleMobileMenu}
          className='text-white focus:outline-none'
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className='absolute top-full right-4 bg-blue-600 rounded-md shadow-lg w-48 mt-2 z-50'>
          <nav className='flex flex-col py-2'>
            {MENU_ITEMS.map((item) => (
              <MobileNavLink
                item={item}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
