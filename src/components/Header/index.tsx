import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { CloseIcon, HamburgerIcon } from './Icons';

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

  // Close the mobile menu when a link is clicked.
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='bg-blue-600 p-4 flex justify-between items-center relative'>
      {/* Logo / Site Title */}
      <div>
        <Link to='/' className='text-white text-xl font-bold'>
          Words of Wisdom
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className='hidden md:flex space-x-4 items-center'>
        {MENU_ITEMS.map((item) => (
          <DesktopNavLink key={item.to} to={item.to} title={item.title} />
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
              <Link
                key={item.to}
                to={item.to}
                className='text-white px-4 py-2 hover:bg-blue-500'
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            ))}
            <div className='px-4 py-2'>
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// ==============================
// helpers
// ==============================

const DesktopNavLink = ({ to, title }: { to: string; title: string }) => (
  <Link to={to} className='text-white hover:underline'>
    {title}
  </Link>
);
