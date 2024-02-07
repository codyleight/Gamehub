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
        <Link key={4} className="nav-link text-light glow-on-hover" to="">
          {/* Empty link to maintain the layout */}
        </Link>,
      ]}
    />
  );
}
