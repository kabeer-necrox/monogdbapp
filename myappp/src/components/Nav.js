import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className='nav-ul'>
        <li>
          <Link to="/">products</Link>
        </li>
        <li>
          <Link to="/add"> Add products</Link>
        </li>
        <li>
          <Link to="/update"> update products</Link>
        </li>
        <li>
          <Link to="/logout">logout products</Link>
        </li>
        <li>
          <Link to="/profile">profile products</Link>
        </li>
        <li>
          <Link to="/signup">sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
