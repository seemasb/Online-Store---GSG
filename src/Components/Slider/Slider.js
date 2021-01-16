import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderFill from '../SliderFill/SliderFill';
import p1 from '../imgs/p1.jpeg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider_cont bg">
        <Slider {...settings}>
          <div>
            <SliderFill
              profile={p1}
              paragraph="While it may not be obvious to everyone, 
            there are a number of reasons creating random paragraphs can be useful.
             A few examples of how some people use this generator are listed in the
              following paragraphs."
              location="Palestine"
            />
          </div>
          <div>
            <SliderFill
              profile={p1}
              paragraph="While it may not be obvious to everyone, 
            there are a number of reasons creating random paragraphs can be useful.
             A few examples of how some people use this generator are listed in the
              following paragraphs."
              location="Palestine"
            />
          </div>
          <div>
            <SliderFill
              profile={p1}
              paragraph="While it may not be obvious to everyone, 
            there are a number of reasons creating random paragraphs can be useful.
             A few examples of how some people use this generator are listed in the
              following paragraphs."
              location="Palestine"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
