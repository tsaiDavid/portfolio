import React from 'react';
import { AboutIcons } from './AboutIcons';

export const AboutTop = () => {
  return (
    <div className="about-top row">
      <img className="six columns" src="https://davidtsai.imgix.net/portfolio/media/headshot.png?auto=format"/>
      <div className="six columns">
        <AboutIcons />
      </div>
    </div>
  );
};
