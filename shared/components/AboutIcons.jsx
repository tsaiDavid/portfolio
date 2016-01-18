import React from 'react';

export const AboutIcons = () => {
  return (
    <div>
      <div className="about-icons row">
        <i className="fa fa-linkedin-square"></i>
        <span><a href="https://www.linkedin.com/in/davidctsai">LinkedIn</a></span>
      </div>

      <div className="about-icons row">
        <i className="fa fa-file-text-o"></i>
        <span><a href="">Resume</a></span>
      </div>

      <div className="about-icons row">
        <i className="fa fa-angellist"></i>
        <span><a href="https://angel.co/tsaiDavid">AngelList</a></span>
      </div>

      <div className="about-icons row">
        <i className="fa fa-github-square"></i>
        <span><a href="https://github.com/tsaiDavid/">GitHub</a></span>
      </div>

      <div className="about-icons row">
        <i className="fa fa-envelope-o"></i>
        <span><a href="mailto:david@whataniceguy.com">Email</a></span>
      </div>
    </div>
  );
};
