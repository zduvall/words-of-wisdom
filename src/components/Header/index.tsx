import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

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
          <Link
            key={item.to}
            to={item.to}
            className='text-white hover:underline'
          >
            {item.title}
          </Link>
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
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isMobileMenuOpen ? (
              // X (close) icon
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
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
