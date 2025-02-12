import { Link } from 'react-router-dom';

interface INavLinkProps {
  item: {
    title: string;
    to: string;
  };
}

const DesktopNavLink = ({ item }: INavLinkProps) => (
  <Link to={item.to} className='text-white hover:underline'>
    {item.title}
  </Link>
);

interface IMobileNavLinkProps extends INavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ item, onClick }: IMobileNavLinkProps) => (
  <Link
    to={item.to}
    className='text-white px-4 py-2 hover:bg-blue-500'
    onClick={onClick}
  >
    {item.title}
  </Link>
);

export { DesktopNavLink, MobileNavLink };
