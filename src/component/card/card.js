import React, {Component} from 'react';
import './card.css'

class Card extends Component {
    render() {
        return (
            <div>
                <div className='playlist-card p-2'>
                    <div className='card-image-container'>
                        <img src='https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c3cb8d93ec3d56f20c78' className='card-image' />
                        <div className='card-button-container'>
                            <i className="fas fa-play-circle card-play-button"/>
                        </div>
                    </div>
                    <div className='card-details-container p-2'>
                        <p className='card-details-header'>
                            Episode 1
                        </p>
                        <p className='card-details-body'>
                            Part1 | 24 min
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
