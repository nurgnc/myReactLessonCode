import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="bg-dark">
      <ul className="d-flex flex-row align-items justify-content-around list-group list-unstyled">
        {routes
          .filter((item) => item.isNav)
          .map((item, index) => (
            <li key={index} className="text-light ">
              <Link to={item.path} className="text-light text-decoration-none">
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
      <hr />
    </div>
  );
}

export default Nav;
