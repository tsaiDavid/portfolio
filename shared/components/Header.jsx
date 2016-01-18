import React from 'react';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <div className="main-header row">
      <Link to={'/'}>
        <div className="title-name six columns">
        david tsai
        </div>
      </Link>
      <div className="title-description six columns">
        <div>
        full stack software engineer
        </div>
        <div>
        san francisco, ca
        </div>
        <span className="menu-item">
          <Link to={'about'}>about</Link>
        </span>
        <span className="menu-item">
          <a href="mailto:david@whataniceguy.com">
          email
          </a>
        </span>
        <span className="menu-item">
          <a href="https://www.github.com/tsaiDavid">github</a>
        </span>
        <span className="menu-item">
          <a href="https://www.linkedin.com/in/davidctsai">
          linkedin
          </a>
        </span>
      </div>
      <div className="header-separator twelve columns"></div>
    </div>
  );
};
