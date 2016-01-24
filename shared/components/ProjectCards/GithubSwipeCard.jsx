import React from 'react';
import { Link } from 'react-router';

export default class GithubSwipeCard extends React.Component {
  render() {
    return (
      <div className="project-card" id="github-swipe">
        <div className="project-title">
        GitHub Swipe
        </div>
        <div className="img-wrapper">
          <Link to={'github-swipe'}>
            <img src="https://davidtsai.imgix.net/portfolio/media/githubswipe/githubswipemockup.png?auto=format" />
          </Link>
          </div>
      </div>
    );
  }
}
