import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>

    <nav>      
      <ul>
        <div><Link className="login" to='/login'>Login</Link>
        <Link className="register" to='/register'>Register</Link></div>
      </ul>
    <h2><Link className="title" to='/'>POINT <br />BREAK</Link></h2>
    </nav>

  </header>
)

export default Header;
