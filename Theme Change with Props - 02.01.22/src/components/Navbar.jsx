import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import siteTheme from '../theme';

function NavBar({ isDark }) {
  const theme = isDark ? siteTheme.dark : siteTheme.light;

  return (
    <nav className={`navbar navbar-expand-lg mb-5 ${theme.navBar}`}>
      <div className="container-fluid">
        <button className="navbar-brand border-0 btn-info rounded text-light">
          Navbar
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="btn-info rounded"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {routes
              .filter((navItem) => navItem.isNav)
              .map((navItem, index) => (
                <Link
                  key={index}
                  to={navItem.path}
                  className="nav-link active"
                  aria-current="page"
                >
                  {navItem.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
