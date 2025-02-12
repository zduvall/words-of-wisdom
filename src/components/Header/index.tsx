import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export interface IHeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ darkMode, setDarkMode }: IHeaderProps) => {
  return (
    <header className='accent-background p-4 flex justify-between items-center'>
      <div>
        <Link to='/' className='text-white text-xl font-bold'>
          Words of Wisdom
        </Link>
      </div>
      <nav>
        <Link to='/' className='text-white mr-4'>
          Home
        </Link>
        <Link to='/quotes' className='text-white mr-4'>
          Quotes
        </Link>
        <Link to='/test' className='text-white mr-4'>
          Test
        </Link>
      </nav>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
};

export default Header;
