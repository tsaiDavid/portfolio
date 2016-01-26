import React from 'react';
import Carousel from 'nuka-carousel';

export default class AlmanacSlider extends React.Component {
  render() {
    const settings = {
      dragging: true,
      cellSpacing: 0,
      speed: 500,
      easing: 'easeOutCirc',
      edgeEasing: 'easeOutElastic',
      slideWidth: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      decorators: [
        {
          component: React.createClass({
            render() {
              return (
                <div className="project-slider-button" id="left">
                  <i className="fa fa-chevron-circle-left" onClick={this.props.previousSlide}></i>
                </div>
              );
            },
          }),
          position: 'CenterLeft',
        },
        {
          component: React.createClass({
            render() {
              return (
                <div className="project-slider-button" id="right">
                  <i className="fa fa-chevron-circle-right" onClick={this.props.nextSlide}></i>
                </div>
              );
            },
          }),
          position: 'CenterRight',
        },
      ],
    };

    return (
      <div className="project-slider-carousel">
        <Carousel {...settings}>
          <img src="http://i.imgur.com/hxsTSie.png" />
          <img src="http://i.imgur.com/vcWWCZN.png" />
          <img src="http://i.imgur.com/PLfAUn5.png" />
          <img src="http://i.imgur.com/cv8Y7mP.png" />
          <img src="http://i.imgur.com/rqFm3lG.png" />
        </Carousel>
      </div>
    );
  }
}
