import React from 'react';
import Carousel from 'nuka-carousel';

export default class TeamAvailSlider extends React.Component {
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
          <img src="http://i.giphy.com/TbTT603xLiTSg.gif" />
          <img src="http://i.imgur.com/ECOCEqv.png" />
          <img src="http://i.imgur.com/h8Vl3s7.png" />
          <img src="http://i.imgur.com/tdNiOyo.png" />
        </Carousel>
      </div>
    );
  }
}
