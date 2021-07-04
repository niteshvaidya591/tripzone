import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css'

export default class SwipeToSlide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slider: []
    }
  }
  componentDidMount() {
    fetch("https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ slider: result.result })
        },
        (error) => {
          console.log(error);
        }
      );
  }
  render() {
    const settings = {
      infinite: false,
      slidesToScroll: 1,
      arrows: false,
      draggable: true,
      autoplay: false,
      variableWidth: true,
      swipeToSlide:true,
      swipe:true,
      adaptiveHeight: false,
      centerMode: false,
      accessibility: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 7.5,
          }
        },
        {
          breakpoint: 1119,
          settings: {
            slidesToShow: 4.5,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.5,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.5,
          }
        }
      ]
    };
    return (
      <div className=" slider-container" id="destinations">
        <h2>Featured Destinations</h2>
        <Slider {...settings}>
          {
            this.state.slider.map((i, j) => (
              <div key={j} className="slide-item">
                <img src={i.imageUrl} alt={`View of city ${i.city}`} />
                <h4>{i.city}</h4>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}