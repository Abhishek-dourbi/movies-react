import React, { Component } from 'react';
import Slider from "react-slick";
import '../Content.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Original extends Component {
    render() {
        var settings = {
            dots: true,
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
            <div style={{marginLeft: 20, marginRight: 30}}>
                <h3 style={{paddingTop: '1rem', marginBottom: 14}}>Originals</h3>
                <Slider {...settings}>
                    <div className="card">
                        <img src = "https://image.tmdb.org/t/p/original//pXeuSWSKgWUnhRFHZ4TjAUU8lbE.jpg" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="card ">
                        <img src = "https://image.tmdb.org/t/p/original//wkFdanlAaV39sSXeslImfRUj3jQ.jpg" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="card ">
                        <img src = "https://image.tmdb.org/t/p/original//zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="card">
                        <img src = "https://image.tmdb.org/t/p/original//wUFIEJCSmurmXPX0mP0cEgoltrk.jpg" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="card">
                        <img src = "https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="card">
                        <img src = "https://image.tmdb.org/t/p/original//1sBx2Ew4WFsa1YY32vlHt079O03.jpg" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="card">
                        <img src = "https://image.tmdb.org/t/p/original//MoEKaPFHABtA1xKoOteirGaHl1.jpg" style={{height: '100%',}} alt = 'img' />
                    </div>
                    <div className="card">
                        <img src = "https://image.tmdb.org/t/p/original//e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg" style={{height: '100%',}} alt = 'img' />
                    </div>
                    </Slider>
            </div>
        )
    }
}

export default Original;