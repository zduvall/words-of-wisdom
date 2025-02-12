import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { CloseIcon, HamburgerIcon } from './Icons';
import { DesktopNavLink, MobileNavLink } from './NavLinks';

const MENU_ITEMS = [
  { title: 'Home', to: '/' },
  { title: 'Quotes', to: '/quotes' },
  { title: 'Test', to: '/test' },
];

const Header = () => {
  const { dropdownRef, isMobileMenuOpen, setIsMobileMenuOpen } =
    useDropDownMenu();

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
        <DarkModeToggle />
      </nav>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className='text-white focus:outline-none'
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          ref={dropdownRef}
          className='accent-background absolute top-full right-4 rounded-md shadow-lg w-48 mt-2 z-50'
        >
          <nav className='flex flex-col py-2'>
            {MENU_ITEMS.map((item) => (
              <MobileNavLink
                key={item.to}
                item={item}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
            <DarkModeToggle />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// =============================================================================
// Hook
// =============================================================================

function useDropDownMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Create a ref to attach to the mobile dropdown container.
  const dropdownRef = useRef<HTMLDivElement>(null);

  // When the mobile menu is open, add a document listener to detect clicks outside the menu.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener on component unmount or when the menu state changes.
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return { dropdownRef, isMobileMenuOpen, setIsMobileMenuOpen };
}
