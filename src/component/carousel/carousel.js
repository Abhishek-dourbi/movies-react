import React, {Component} from 'react';
import './carousel.css';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://d1dfc9w6nzu9oi.cloudfront.net/5ec6f8f12d91113d70d55fd6" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://d1dfc9w6nzu9oi.cloudfront.net/5e4ef5fbe903a73d34a4c365" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://d1dfc9w6nzu9oi.cloudfront.net/5ea1ed105e47c13d5388b605" className="d-block w-100" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <i className="arrow-button fas fa-chevron-left" aria-hidden="true"></i>
                    {/*<span className="carousel-control-prev-icon arrow-button" aria-hidden="true"></span>*/}
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <i className="arrow-button fas fa-chevron-right" aria-hidden="true"></i>
                </a>
                <div className="overlay" />
            </div>
        );
    }
}

export default Carousel;
