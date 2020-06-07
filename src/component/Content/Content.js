import React, { Component } from 'react';
import './Content.css';
import Slider from "./Slider";

let Data = [
    {
        image: 'https://image.tmdb.org/t/p/original//nel144y4dIOdFFid6twN5mAX9Yd.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//1sBx2Ew4WFsa1YY32vlHt079O03.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//pB9L0jAnEQLMKgexqCEocEW8TA.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//zgu3p4NvisS8CI68cUfBKbvAvu8.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//MoEKaPFHABtA1xKoOteirGaHl1.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//zgu3p4NvisS8CI68cUfBKbvAvu8.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//MoEKaPFHABtA1xKoOteirGaHl1.jpg'
    },
    {
        image: 'https://image.tmdb.org/t/p/original//e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg'
    },
]

class Content extends Component {
    render() {
        return (
            <div className="display" >
               <Slider data={Data} title='Originals'/>
               <Slider data={Data} title='Comedy'/>
               <Slider data={Data} title='Youth'/>
            </div>
        )
    }
}

export default Content;
