import React, { Component } from 'react';
import '../Content.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Albums extends Component {
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
            <div className='card-heading' >
                <h3 style={{paddingTop: '2rem', marginBottom: '1rem'}}>Album Songs</h3>
                <Slider {...settings}>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className="other">
                            <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f" style={{height: '100%',}} alt = 'img' />
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Albums;