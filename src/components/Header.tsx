import { Link } from 'react-router-dom';

interface IHeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: IHeaderProps) => {
  return (
    <header className='bg-blue-600 p-4 flex justify-between items-center'>
      <div>
        <Link to='/' className='text-white text-xl font-bold'>
          Words of Wisdom
        </Link>
      </div>
      <nav>
        <Link to='/' className='text-white mr-4'>
          Home
        </Link>
        <Link to='/index' className='text-white mr-4'>
          Index
        </Link>
        <Link to='/test' className='text-white mr-4'>
          Test
        </Link>
      </nav>
      <button
        className='bg-white text-blue-600 px-2 py-1 rounded'
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;
