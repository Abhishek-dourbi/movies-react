import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './carousel.css';
import RoutesEnum from "../../routes/routesEnum";


const CarouselData = [
    {
        image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6f8f12d91113d70d55fd6',
        active: true,
        id: '1'
    },
    {
        image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e4ef5fbe903a73d34a4c365',
        active: false,
        id: '2'
    },
    {
        image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ea1ed105e47c13d5388b605',
        active: false,
        id: '3'
    },
]

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        CarouselData.map(ele => (
                            <Link to={`/playlist/${ele.id}`} className={ele.active ? "carousel-item active" : "carousel-item"}>
                                <img src={ele.image} className="d-block w-100" />
                            </Link>
                        ))
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <i className="arrow-button fas fa-chevron-left" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <i className="arrow-button fas fa-chevron-right" aria-hidden="true" />
                </a>
                <div className="overlay" />
            </div>
        );
    }
}

export default Carousel;
