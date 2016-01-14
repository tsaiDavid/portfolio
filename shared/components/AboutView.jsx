import React from 'react'

export const AboutView = () => {
  return (
    <div className="about-container row">
      <div className="question-title">
        <strong>Who are you?</strong>
      </div>
      <div className="question-response">
        I'm a Full Stack Software Engineer passionate about building and shipping beautiful, thoughtful, and performant products.

        I'm oriented by a holistic understanding of the full stack, utilizing tools like React, Node, and MongoDB to create products
        guided by my deep experience in understanding user needs.
      </div>
      <div className="question-title">
        <strong>What excites you?</strong>
      </div>
      <div className="question-response">
        I spend a lot of time considering 'developer experience' - I'm encouraged
        by the momentum I see in the community, especially wth an increasingly positive
        response towards the open source community. I'm particularly passionate
        about the fact that budding technologies many of us use in production can
        be the resulting ideas.
      </div>
      <div className="question-title">
        <strong>How'd you build this portfolio?</strong>
      </div>
      <div className="question-response">
        I decided to leverage some of my favorite technologies in building out this portfolio.
        Given the nature of React and Redux, which allows easy serialization of app state, I was
        able to incorporate server-side-rendering (also known as universal or isomoprhic).
      </div>
    </div>
  )
}