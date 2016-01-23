import React from 'react';
import { Link } from 'react-router';

export default class AlmanacCard extends React.Component {
  render() {
    return (
      <div className="project-card" id="almanac">
        <div className="project-title">
        Almanac News
        </div>

        <div className="img-wrapper">
          <Link to={'almanac-news'}>
            <img src="https://davidtsai.imgix.net/portfolio/media/almanac/almanac-landing.png?auto=format" />
                  </Link>
          </div>

      </div>
    );
  }
}
