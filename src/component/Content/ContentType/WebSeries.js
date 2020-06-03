import React, { Component } from 'react';
import '../Content.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class WebSeries extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className='card-heading'>
                <h3 style={{paddingTop: '1rem', marginBottom: 10}}>Web Series</h3>
                <Slider {...settings}>
                    <div className='col-md-4 col-sm-12'>
                <div className="other">
                    <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5eb87f6dc88e6e3d3458c4ab" style={{height: '100%',}} alt = 'img' />
                </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                <div className="other ">
                    <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5eb87f6dc88e6e3d3458c4ab" style={{height: '100%',}} alt = 'img' />
                </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                <div className="other ">
                    <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5eb87f6dc88e6e3d3458c4ab" style={{height: '100%',}} alt = 'img' />
                </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                <div className="other">
                    <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e925be731a4ff3d36309e68" style={{height: '100%',}} alt = 'img' />
                </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                <div className="other">
                    <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5ed0386dbf91430c6f56e0fc" style={{height: '100%',}} alt = 'img' />
                </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                <div className="other">
                    <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5ed0386dbf91430c6f56e0fc" style={{height: '100%',}} alt = 'img' />
                </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                <div className="other">
                    <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5ed0386dbf91430c6f56e0fc" style={{height: '100%',}} alt = 'img' />
                </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                <div className="other">
                    <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5ed0386dbf91430c6f56e0fc" style={{height: '100%',}} alt = 'img' />
                </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default WebSeries;