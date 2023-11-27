import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link to={href}>
      <div className="text-slate-400 hidden md:block hover:text-white cursor-pointer font-bold text-xl">
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
