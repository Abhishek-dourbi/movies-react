import React, { Component } from 'react';
import Header from "../../component/header/header";
import Carousel from "../../component/carousel/carousel";
import Content from "../../component/Content/Content";
import Footer from "../../component/Footer/Footer";


class Dashboard extends Component {
    render() {
        return (
            <div>
            <Header />
            <Carousel />
            <Content />
            <Footer/>
            </div>
        );
    }
}

export default Dashboard;
