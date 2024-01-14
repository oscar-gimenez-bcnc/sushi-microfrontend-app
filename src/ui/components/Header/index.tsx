import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="navbar w-full bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          Sushi
        </Link>
      </div>
      <div className="navbar-end lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
