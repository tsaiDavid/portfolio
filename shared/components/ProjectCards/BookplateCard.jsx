import React from 'react';
import { Link } from 'react-router';

export default class BookplateCard extends React.Component {
  render() {
    return (
      <div className="project-card" id="almanac">
        <div className="project-title">
        Bookplate
        </div>
        <div className="img-wrapper">
          <Link to={'bookplate'}>
            <img src="https://davidtsai.imgix.net/portfolio/media/bookplate/bookplate-home.png?auto=format" />
          </Link>
        </div>
      </div>
    );
  }
}
