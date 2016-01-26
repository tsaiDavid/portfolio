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
          <img src="http://i.giphy.com/TbTT603xLiTSg.gif" />
          <img src="http://i.imgur.com/ECOCEqv.png" />
          <img src="http://i.imgur.com/h8Vl3s7.png" />
          <img src="http://i.imgur.com/tdNiOyo.png" />
        </Carousel>
      </div>
    );
  }
}
