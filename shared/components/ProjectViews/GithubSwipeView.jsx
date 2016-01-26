import React from 'react';
// import GithubSwipeSlider from '../ProjectSlider/GithubSwipeSlider';

export default class GithubSwipeView extends React.Component {

  render() {
    const tools = [
      'React Native',
      'Redux',
      'Ruby on Rails',
      'PostgreSQL',
      'iOS',
      'Native Mobile'
    ];

    return (
      <div className="project-view view-container container">
        <div className="project-view-title">
        GitHub Swipe
        </div>
        <div className="project-view-summary">
          Currently under development - This is an Open Source project built with a group of like-minded
          developers in San Francisco, designed with the intent of "making Open Source more open". Having established the
          overall structure of this React Native application, complete with project roadmap, contrib/style guidelines -
          I am currently working on connecting the application to a Ruby on Rails backend and developing views that
          are inherently intuitive. Finally, the team is pushing the boundaries as far as usage of Redux goes in the React Native community - and hope to push our learnings out.
        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
          <img src="https://davidtsai.imgix.net/portfolio/media/githubswipe/githubswipemockup.png?auto=format" style={{
            height: '100%',
            width: '100%',
            paddingTop: '2em'
          }} />
      </div>
    );
  }
}
