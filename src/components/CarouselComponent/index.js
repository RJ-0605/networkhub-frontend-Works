import React from 'react';
import Slider from "react-slick";
import slider1 from '../../assets/images/slider1.jpg'
import './style.css'


const CarouselComponent = () => {
    const settings = {
    centerPadding: '12px',
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <>
        <div className='slider-background'>
        <div className='slider-body'>
          <div className='slider-heading'><p>Top individuals providing resources</p></div>
            <Slider className='slick-skin' {...settings}>
                  <div className='slider'>
                    <img src={slider1}/>
                    <p>UI Designer</p>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                    <p>UI Designer</p>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                    <p>Journalist</p>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                    <p>Scientist</p>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
            </Slider>
            </div>
            </div>

        <div className='slider-background'>
        <div className='slider-body'>
          <div className='slider-heading'><p>Top organisations/communities providing resources</p></div>
            <Slider className='slick-skin' {...settings}>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
                  <div className='slider'>
                    <img src={slider1}/>
                  </div>
            </Slider>
            </div>
            </div>
        </>
    )
}

export default CarouselComponent;