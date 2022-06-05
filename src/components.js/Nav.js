import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contacts">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
