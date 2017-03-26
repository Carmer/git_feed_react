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
            {/* <li className="col s6">
              <div className="input-field nav-search-input">
                <label for="search-bar" id="searchlabel">Search</label>
                <input id="search-bar" type="text" className="validate"></input>
              </div>
            </li> */}
            <li><img src={tempAvatar} className="nav-avatar" alt="avatar"/></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header;
