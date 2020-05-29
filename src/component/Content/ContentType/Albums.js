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
            <div style={{marginLeft: 10, marginRight:30}}>
                <h3 style={{paddingTop: '1rem', marginBottom: -16}}>Album Songs</h3>
                <Slider {...settings}>
                    <div className="albums">
                        <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e1f32ff88491f3bdf9bebf7" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="albums ">
                        <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5dcacc61b2a7c43bef974107" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="albums ">
                        <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e03c0a17ec0db3bdfc77021" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="albums">
                        <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e661b0acf87fb3d46dd4792" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="albums">
                        <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5e4d5cb0d43eb13d43d63bc8" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="albums">
                        <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5dc0276401408a3c0abbac9f" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="albums">
                        <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5dc0276401408a3c0abbac9f" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="albums">
                        <img src = "https://d1dfc9w6nzu9oi.cloudfront.net/5dc0276401408a3c0abbac9f" style={{height: '100%',}} alt = 'img' />
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Albums;