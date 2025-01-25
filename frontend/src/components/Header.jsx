import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="retro-header">
      <div className="logo">
        <Link to="/">RetroWellness</Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/plans">Plans</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
