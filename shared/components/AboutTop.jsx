import React from 'react';
import { AboutIcons } from './AboutIcons';

export const AboutTop = () => {
  return (
    <div className="about-top row">
      <img className="six columns" src="http://i.imgur.com/Y4kqqUg.png"/>
      <div className="six columns">
        <AboutIcons />
      </div>
    </div>
  );
};
