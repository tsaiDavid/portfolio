import React from 'react';
import Carousel from 'nuka-carousel';

export default class AlmanacNewsView extends React.Component {
  render() {
    const settings = {
      dragging: true,
      cellSpacing: 20,
      speed: 500,
      easing: 'easeOutCirc',
      edgeEasing: 'easeOutElastic',
      slideWidth: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      framePadding: '10%',
    };

    return (
      <div className="view-container">
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
