import React, {Component} from 'react';
import './card.css'

class Card extends Component {
    render() {
        const {
            episode,
            part,
            duration,
            thumbnail
        } = this.props;
        return (
            <div>
                <div className='playlist-card p-2'>
                    <div className='card-image-container'>
                        <img src={thumbnail} className='card-image' />
                        <div className='card-button-container'>
                            <i className="fas fa-play-circle card-play-button"/>
                        </div>
                    </div>
                    <div className='card-details-container p-2'>
                        <p className='card-details-header'>
                            Episode {episode}
                        </p>
                        <p className='card-details-body'>
                            Part {part} | {duration} min
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
