import { Link } from 'react-router-dom';

interface IHeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: IHeaderProps) => {
  return (
    <header>
      <nav
        className='navbar is-primary'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            Words of Wisdom
          </Link>
          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarMenu'
            onClick={(e) => {
              const target = document.getElementById('navbarMenu');
              target?.classList.toggle('is-active');
              (e.currentTarget as HTMLElement).classList.toggle('is-active');
            }}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarMenu' className='navbar-menu'>
          <div className='navbar-start'>
            <Link className='navbar-item' to='/'>
              Home
            </Link>
            <Link className='navbar-item' to='/index'>
              Index
            </Link>
            <Link className='navbar-item' to='/test'>
              Test
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <button
                className='button is-small'
                onClick={() => setDarkMode(!darkMode)}
              >
                Toggle Dark Mode
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
