import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <h2>Surf Buddy</h2>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
