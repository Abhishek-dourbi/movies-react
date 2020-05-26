import React, {Component} from 'react';
import Header from "../../component/header/header";
import Carousel from "../../component/carousel/carousel";

class Dashboard extends Component {
    render() {
        return (
            <div>
               <Header />
               <Carousel />
            </div>
        );
    }
}

export default Dashboard;
