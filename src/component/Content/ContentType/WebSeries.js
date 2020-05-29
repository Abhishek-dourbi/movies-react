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
            <div style={{marginLeft: 10, marginRight:30}}>
                <h3 style={{paddingTop: '1rem', marginBottom: -16}}>Web Series</h3>
                <Slider {...settings}>
                <div className="other">
                    <img src = "https://image.tmdb.org/t/p/original//aGuX4z8FPiC9oObQWXRai7TTtej.jpg" style={{height: '100%',}} alt = 'img' />
                </div>
                <div className="other ">
                    <img src = "https://image.tmdb.org/t/p/original//prnq2ONhqo9Tga7dOMZKgFJMofs.jpg" style={{height: '100%',}} alt = 'img' />
                </div>
                <div className="other ">
                    <img src = "https://image.tmdb.org/t/p/original//mUCV0W6TaAk8UWA5yAmqCywC63F.jpg" style={{height: '100%',}} alt = 'img' />
                </div>
                <div className="other">
                    <img src = "https://image.tmdb.org/t/p/original//ize3ZieqSy0TCWljmVoEiy8fSFS.jpg" style={{height: '100%',}} alt = 'img' />
                </div>
                <div className="other">
                    <img src = "https://image.tmdb.org/t/p/original//ize3ZieqSy0TCWljmVoEiy8fSFS.jpg" style={{height: '100%',}} alt = 'img' />
                </div>
                <div className="other">
                    <img src = "https://image.tmdb.org/t/p/original//upUy2QhMZEmtypPW3PdieKLAHxh.jpg" style={{height: '100%',}} alt = 'img' />
                </div>
                <div className="other">
                    <img src = "https://image.tmdb.org/t/p/original//lVSMgZUBE4XTVaPBEBAczre4f1W.jpg" style={{height: '100%',}} alt = 'img' />
                </div>
                <div className="other">
                    <img src = "https://image.tmdb.org/t/p/original//1EGFjibWzsN2GNNeOSQBYhQ9pK5.jpg" style={{height: '100%',}} alt = 'img' />
                </div>
                </Slider>
            </div>
        )
    }
}

export default WebSeries;