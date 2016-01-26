import React from 'react';
import AlmanacSlider from '../ProjectSlider/AlmanacSlider';

export default class AlmanacNewsView extends React.Component {

  render() {
    const tools = [
      'React',
      'Redux',
      'Node',
      'Express',
      'Python',
      'RethinkDB',
      'Redis',
      'Socket.io',
      'AWS',
      'Docker',
    ];

    return (
      <div className="project-view view-container container">
        <div className="project-view-title">
        Almanac News
        </div>
        <div className="project-view-summary">
        A responsive, realtime news application providing financial data visualizations between articles and asset motion - built with React / Redux, Node, and Python. Features animated stock-charts, SoundCloud-style commenting, "likes", and realtime updates across news feed and article display pages.
        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
        <AlmanacSlider />
      </div>
    );
  }
}
