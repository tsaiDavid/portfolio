import React from 'react';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <div className="nav-exterior">
      <div className="nav-interior">
        <div className="nav-link">
          <Link to={'/'} id="nav-link-router">
            <span id="nav-name">David Tsai</span>
            <span id="nav-title">Full Stack Software Engineer</span>
          </Link>
        </div>
        <div className="nav-links">
          <div className="nav-link"><Link to={'about'}>about</Link></div>
          <a className="nav-link" href="https://www.github.com/tsaiDavid">GitHub</a>
          <a className="nav-link" href="https://www.linkedin.com/in/davidctsai">LinkedIn</a>
          <a className="nav-link" href="mailto:david@whataniceguy.com">Email</a>
        </div>
      </div>
    </div>
  );
};
