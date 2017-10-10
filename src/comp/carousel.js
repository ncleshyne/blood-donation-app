import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import '../slick-js/slick/slick.js';
import $ from 'jquery';

class Carousel extends Component {
  render() {

    return {

    }
  }
}


export default Carousel;

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
