import React from 'react';
import AlmanacCard from './ProjectCards/AlmanacCard';
import TeamAvailabilityCard from './ProjectCards/TeamAvailabilityCard';
import GithubSwipeCard from './ProjectCards/GithubSwipeCard';
import BookplateCard from './ProjectCards/BookplateCard';

export default class Projects extends React.Component  {
  render() {
    return (
      <div className="projects-container">
        <div id="recent-projects">Recent Projects</div>
        <AlmanacCard />
        <TeamAvailabilityCard />
        <GithubSwipeCard />
        <BookplateCard />
      </div>
    );
  }
}
