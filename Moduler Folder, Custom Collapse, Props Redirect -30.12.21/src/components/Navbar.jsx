import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href="#" aria-current="page" className="nav-link active">
                Ana Sayfa
              </a>
              <a href="#" className="nav-link">
                Hakkimizda
              </a>
              <a href="#" className="nav-link">
                Kullanici Profili
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
