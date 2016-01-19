import React from 'react';
import Carousel from 'nuka-carousel';

export default class AlmanacSlider extends React.Component {
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
      framePadding: '10%'
    }

    return (
      <div>
        <Carousel {...settings}>
          <img src="http://i.imgur.com/FjlOkD0.png" />
          <img src="http://i.imgur.com/Hwp4oEW.png" />
          <img src="http://i.imgur.com/5EIBcIt.png" />
          <img src="http://i.imgur.com/vGOme8n.png" />
        </Carousel>
      </div>
    );
  }
}
