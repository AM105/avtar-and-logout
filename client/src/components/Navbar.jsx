import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import img1 from "./image/123.png"
function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src="http://www.mrkzgulf.com/do.php?img=429440" alt="Logo" />
        </div>
        <ul className="list-item">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#">Contact us</a></li>

          {auth ? (
            <li>
              <div className="avatar-container" onClick={toggleDropdown}>
                <img
                  src={img1} // Assuming avatar is stored in your user object
                  alt="Avatar"
                  className="avatar"
                />
                {showDropdown && (
                  <div className="dropdown">
                    <p>{JSON.parse(auth).name}</p>
                    <Link onClick={logout} to="/register">Logout</Link>
                  </div>
                )}
              </div>
            </li>
          ) : (
            <>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

