import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div>
      <ul>
        {routes
          .filter((item) => item.isNav)
          .map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
      </ul>
      <hr />
    </div>
  );
}

export default Nav;
