import React from 'react';
// import logo from '../images/logo.svg';
import logo from '../images/github.png';
import tempAvatar from '../images/tempAvatar.jpeg';

let Header = function() {
  return (
    <nav>
      <div className="GitFeed-header">
        <img src={logo} className="GitFeed-logo" alt="logo" />
        <h1>Git_Feed</h1>
        <h6>Powered by GitHub API</h6>
        <div className="nav-wrapper black">
          <ul className="right hide-on-med-and-down">
            <li><img src={tempAvatar} className="nav-avatar" alt="avatar"/></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header;
