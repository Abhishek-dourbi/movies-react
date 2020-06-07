import React, {Component} from 'react';
import  signIn from '../Sign-in/signIn';
import './header.css';
import {Link} from "react-router-dom";
import RoutesEnum from "../../routes/routesEnum";


class Header extends Component {
    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            document.querySelector('#header').style.backgroundColor = '#000';
        } else {
            document.querySelector('#header').style.backgroundColor = 'transparent';
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <nav id="header" className="navbar fixed-top navbar-expand-lg navbar-light navbar-container">
                <Link to={RoutesEnum.dashboard} className="navbar-brand">
                    <img className="navbar-logo" src="https://ullu.app/assets/img/ullu-text.png" />
                </Link>
                <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggle-btn-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div className="mr-auto">
                    </div>
                    <div>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active button-container button-border parallelogram">
                                <button className="nav-link nav-button tilted-button" href="#">
                                    <span className="nav-button-label home-button-label">Home</span>
                                </button>
                            </li>
                            <li className="nav-item button-container">
                                <button className="nav-link nav-button" href="#">
                                    <span className="nav-button-label subscribe-button-label">
                                        <i className="fas fa-rocket rocket-icon" />
                                        Subscribe
                                    </span>
                                </button>
                            </li>
                            <li className="nav-item button-container">
                                <button className="nav-link nav-button" href="#" tabIndex="-1">
                                    <i className="fa fa-search search-icon" />
                                </button>
                            </li>
                            <li className="nav-item button-container parallelogram button-border nav-button-right">
                                <button className="nav-link nav-button tilted-button" href="/signIn" tabIndex="-1">
                                    <span className="nav-button-label">Sign in | Register</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
