import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import Button from './Button';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#1f6b4a] bg-[#1f6b4a] text-[#f7f4de]'
      : 'border-transparent text-[#2f5f48] hover:border-[#1f6b4a] hover:bg-[#1f6b4a] hover:text-[#f7f4de]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#c8a327] bg-[#efe5bd] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="B-Exchange" className="h-9 w-9 rounded-full border-2 border-[#c8a327] bg-[#f7f4de] object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-[#1f6b4a] font-head">B-Exchange</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex font-text">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>  

        <Button to="/auth/signin" className='font-text'>Sign out</Button> 
      </div>
    </header>
  );
};

export default NavBar;
