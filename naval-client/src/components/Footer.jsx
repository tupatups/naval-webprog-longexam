import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#c8a327] bg-[#1f6b4a] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div>
          <p className="text-lg font-bold text-[#f7f4de] font-head">B-Exchange</p>
          <p className="mt-1 text-sm text-[#efe5bd] font-text">
            Campus essentials with a clean green-and-gold experience.
          </p>
        </div>

        <nav className="flex flex-wrap gap-2 font-text">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="rounded-full border border-[#c8a327] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f7f4de] hover:bg-[#18543a]"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#efe5bd] font-text">
          Christopher Naval | National University - Manila
        </p>
      </div>
    </footer>
  )
}

export default Footer
