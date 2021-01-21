import React, { Component } from 'react';
import Slider from 'react-slick';
// import { baseUrl } from './config';
var baseUrl =
  'https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg';
export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
            <img src={baseUrl} />
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={baseUrl} />
          </div>
          <div>
            <img src={baseUrl} />
          </div>
          <div>
            <img src={baseUrl} />
          </div>
          <div>
            <img src={baseUrl} />
          </div>
        </Slider>
      </div>
    );
  }
}
