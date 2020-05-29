import React, { Component } from 'react';
import Original from "./ContentType/Original";
import WebSeries from "./ContentType/WebSeries";
import Albums from "./ContentType/Albums";
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="display" >
           <Original/>
           <WebSeries/>
           <Albums/>
            </div>
        )
    }
}

export default Content;