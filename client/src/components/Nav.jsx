import { Link } from 'react-router-dom';

import Navbar from './UI/Navbar';
import Auth from '../utils/auth';

export default function Nav() {
  const isLoggedIn = Auth.loggedIn();

  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light glow-on-hover " to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light glow-on-hover" to="/productadd">
          Add Product
        </Link>,
        <Link key={3} className="nav-link text-light glow-on-hover" to="/newgenre">
          Add Genre
        </Link>,
        isLoggedIn ? (
          <span key={2} className="nav-link text-light glow-on-hover">
            Welcome, user!
          </span>
        ) : (
          <Link key={2} className="nav-link text-light glow-on-hover" to="/login">
            Login
          </Link>
        ),
        isLoggedIn ? null : (
          <Link key={3} className="nav-link text-light glow-on-hover" to="/signup">
            Signup
          </Link>
        ),

      ]}
    />
  );
}
