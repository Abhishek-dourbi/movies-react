import React, { Component } from 'react';
import './Content.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Original extends Component {
    render() {
        const {data, title} = this.props;
        return (
            <div>
                <h3 style={{paddingTop: '1rem', marginBottom: 14}}>{title}</h3>
                <div className="rest" style={{display: 'flex' , overflowX: 'visible', overflowY: "hidden",}}>
                    {
                        data.map(ele => {
                            return (
                                <div className='other'>
                                    <img src={ele.image} style={{height: '100%',}} alt='img' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Original;
