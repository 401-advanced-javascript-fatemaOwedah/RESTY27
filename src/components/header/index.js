import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  return (
      <header>
          <h1>RESTy</h1>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <NavLink to="/history" activeClassName="here">History</NavLink>
                  </li>
              </ul>
          </nav>
      </header>
  )
};

export default Header;